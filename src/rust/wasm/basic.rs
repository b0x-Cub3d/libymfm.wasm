// license:BSD-3-Clause
// copyright-holders:Hiromasa Tanaka
use std::rc::Rc;
use std::{cell::RefCell, slice};

use crate::{
    driver::{self, VgmPlay},
    sound::{RomIndex, SoundChipType, SoundSlot},
};

///
/// for WebAssembly Instance on thread-local
///
type VgmPlayBank = Rc<RefCell<Vec<VgmPlay>>>;
std::thread_local!(static VGM_PLAY: VgmPlayBank = {
    Rc::new(RefCell::new(Vec::new()))
});

type SoundSlotBank = Rc<RefCell<Vec<SoundSlot>>>;
std::thread_local!(static SOUND_SLOT: SoundSlotBank = {
    Rc::new(RefCell::new(Vec::new()))
});

///
/// Get thread local value Utility
///
fn get_vgm_bank() -> VgmPlayBank {
    VGM_PLAY.with(|rc| rc.clone())
}

fn get_sound_slot_bank() -> SoundSlotBank {
    SOUND_SLOT.with(|rc| rc.clone())
}

///
/// WebAssembly basic interfaces
///
#[no_mangle]
pub extern "C" fn vgm_create(
    vgm_index_id: u32,
    output_sampling_rate: u32,
    output_sample_chunk_size: u32,
    vgm_file_size: u32,
) {
    get_vgm_bank().borrow_mut().insert(
        vgm_index_id as usize,
        VgmPlay::new(
            SoundSlot::new(
                driver::VGM_TICK_RATE,
                output_sampling_rate,
                output_sample_chunk_size as usize,
            ),
            vgm_file_size as usize,
        ),
    );
}

#[no_mangle]
pub extern "C" fn sound_slot_create(
    sound_slot_index_id: u32,
    external_tick_rate: u32,
    output_sampling_rate: u32,
    output_sample_chunk_size: u32,
) {
    get_sound_slot_bank().borrow_mut().insert(
        sound_slot_index_id as usize,
        SoundSlot::new(
            external_tick_rate,
            output_sampling_rate,
            output_sample_chunk_size as usize,
        ),
    );
}

#[no_mangle]
pub extern "C" fn sound_slot_add_sound_device(
    sounde_slot_index: u32,
    sound_chip_type: u32,
    number_of: u32,
    clock: u32,
) {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .add_sound_device(
            get_sound_chip_type(sound_chip_type),
            number_of as usize,
            clock,
        )
}

#[no_mangle]
pub extern "C" fn sound_slot_write(
    sounde_slot_index: u32,
    sound_chip_type: u32,
    sound_chip_index: u32,
    port: u32,
    data: u32,
) {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .write(
            get_sound_chip_type(sound_chip_type),
            sound_chip_index as usize,
            port,
            data,
        )
}

#[no_mangle]
pub extern "C" fn sound_slot_update(sounde_slot_index: u32, tick_count: u32) {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .update(tick_count as usize)
}

#[no_mangle]
pub extern "C" fn sound_slot_is_stream_filled(sounde_slot_index: u32) -> u32 {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .is_stream_filled()
        .into()
}

#[no_mangle]
pub extern "C" fn sound_slot_stream(sounde_slot_index: u32) {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .stream()
}

#[no_mangle]
pub extern "C" fn sound_slot_sampling_l_ref(sounde_slot_index: u32) -> *const f32 {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .get_output_sampling_l_ref()
}

#[no_mangle]
pub extern "C" fn sound_slot_sampling_r_ref(sounde_slot_index: u32) -> *const f32 {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .get_output_sampling_r_ref()
}

#[no_mangle]
pub extern "C" fn sound_slot_sampling_s16le_ref(sounde_slot_index: u32) -> *const i16 {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .get_output_sampling_s16le_ref()
}

#[no_mangle]
pub extern "C" fn sound_slot_add_rom(
    sounde_slot_index: u32,
    rom_index: u32,
    memory: *const u8,
    memory_length: u32,
    start_address: u32,
    end_address: u32,
) {
    let rom_index = match rom_index {
        0 => RomIndex::YM2608_DELTA_T,
        1 => RomIndex::YM2610_ADPCM,
        2 => RomIndex::YM2610_DELTA_T,
        3 => RomIndex::YMF278B_ROM,
        4 => RomIndex::YMF278B_RAM,
        5 => RomIndex::Y8950_ROM,
        6 => RomIndex::SEGAPCM_ROM,
        _ => panic!("not support rom index"),
    };
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .add_rom(
            rom_index,
            unsafe { slice::from_raw_parts(memory, memory_length as usize) },
            start_address as usize,
            end_address as usize,
        );
}

#[no_mangle]
pub extern "C" fn sound_slot_add_data_block(
    sounde_slot_index: u32,
    data_block_id: u32,
    data_block: *const u8,
    data_block_length: u32,
) {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .add_data_block(data_block_id as usize, unsafe {
            slice::from_raw_parts(data_block, data_block_length as usize)
        });
}

#[no_mangle]
pub extern "C" fn sound_slot_get_data_block(
    sounde_slot_index: u32,
    data_block_id: u32,
) -> *const u8 {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .get_data_block(data_block_id as usize)
        .as_ptr()
}

#[no_mangle]
pub extern "C" fn sound_slot_add_data_stream(
    sounde_slot_index: u32,
    sound_chip_type: u32,
    sound_chip_index: u32,
    data_stream_id: u32,
    write_port: u32,
) {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .add_data_stream(
            get_sound_chip_type(sound_chip_type),
            sound_chip_index as usize,
            sound_chip_index as usize,
            data_stream_id,
            write_port,
        );
}

#[no_mangle]
pub extern "C" fn sound_slot_set_data_stream_frequency(
    sounde_slot_index: u32,
    sound_chip_type: u32,
    sound_chip_index: u32,
    data_stream_id: u32,
    frequency: u32,
) {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .set_data_stream_frequency(
            get_sound_chip_type(sound_chip_type),
            sound_chip_index as usize,
            data_stream_id as usize,
            frequency,
        );
}

#[no_mangle]
pub extern "C" fn sound_slot_attach_data_block_to_stream(
    sounde_slot_index: u32,
    sound_chip_type: u32,
    sound_chip_index: u32,
    data_stream_id: u32,
    data_block_id: u32,
) {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .attach_data_block_to_stream(
            get_sound_chip_type(sound_chip_type),
            sound_chip_index as usize,
            data_stream_id as usize,
            data_block_id as usize,
        );
}

#[no_mangle]
pub extern "C" fn sound_slot_start_data_stream(
    sounde_slot_index: u32,
    sound_chip_type: u32,
    sound_chip_index: u32,
    data_stream_id: u32,
    data_block_start_offset: u32,
    data_block_length: u32,
) {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .start_data_stream(
            get_sound_chip_type(sound_chip_type),
            sound_chip_index as usize,
            data_stream_id as usize,
            data_block_start_offset as usize,
            data_block_length as usize,
        );
}

#[no_mangle]
pub extern "C" fn sound_slot_start_data_stream_fast(
    sounde_slot_index: u32,
    sound_chip_type: u32,
    sound_chip_index: u32,
    data_stream_id: u32,
    data_block_id: u32,
) {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .start_data_stream_fast(
            get_sound_chip_type(sound_chip_type),
            sound_chip_index as usize,
            data_stream_id as usize,
            data_block_id as usize,
        );
}

#[no_mangle]
pub extern "C" fn sound_slot_stop_data_stream(
    sounde_slot_index: u32,
    sound_chip_type: u32,
    sound_chip_index: u32,
    data_stream_id: u32,
) {
    get_sound_slot_bank()
        .borrow_mut()
        .get_mut(sounde_slot_index as usize)
        .unwrap()
        .stop_data_stream(
            get_sound_chip_type(sound_chip_type),
            sound_chip_index as usize,
            data_stream_id as usize,
        );
}

#[no_mangle]
pub extern "C" fn vgm_get_seq_data_ref(vgm_index_id: u32) -> *mut u8 {
    get_vgm_bank()
        .borrow_mut()
        .get_mut(vgm_index_id as usize)
        .unwrap()
        .get_vgmfile_ref()
}

#[no_mangle]
pub extern "C" fn vgm_get_sampling_l_ref(vgm_index_id: u32) -> *const f32 {
    get_vgm_bank()
        .borrow_mut()
        .get_mut(vgm_index_id as usize)
        .unwrap()
        .get_sampling_l_ref()
}

#[no_mangle]
pub extern "C" fn vgm_get_sampling_r_ref(vgm_index_id: u32) -> *const f32 {
    get_vgm_bank()
        .borrow_mut()
        .get_mut(vgm_index_id as usize)
        .unwrap()
        .get_sampling_r_ref()
}

#[no_mangle]
pub extern "C" fn vgm_get_sampling_s16le_ref(vgm_index_id: u32) -> *const i16 {
    get_vgm_bank()
        .borrow_mut()
        .get_mut(vgm_index_id as usize)
        .unwrap()
        .get_output_sampling_s16le_ref()
}

#[no_mangle]
#[allow(improper_ctypes_definitions)]
pub extern "C" fn vgm_get_seq_header(vgm_index_id: u32) {
    get_vgm_bank()
        .borrow_mut()
        .get_mut(vgm_index_id as usize)
        .unwrap()
        .get_vgm_header_json();
}

#[no_mangle]
pub extern "C" fn vgm_init(vgm_index_id: u32) -> bool {
    get_vgm_bank()
        .borrow_mut()
        .get_mut(vgm_index_id as usize)
        .unwrap()
        .init()
        .is_ok()
}

#[no_mangle]
pub extern "C" fn vgm_play(vgm_index_id: u32) -> usize {
    get_vgm_bank()
        .borrow_mut()
        .get_mut(vgm_index_id as usize)
        .unwrap()
        .play(true)
}

#[no_mangle]
pub extern "C" fn vgm_drop(vgm_index_id: u32) {
    get_vgm_bank().borrow_mut().remove(vgm_index_id as usize);
}

#[no_mangle]
pub extern "C" fn sound_slot_drop(sound_slot_index_id: u32) {
    get_sound_slot_bank()
        .borrow_mut()
        .remove(sound_slot_index_id as usize);
}

#[no_mangle]
pub extern "C" fn wasi_interface_test() -> u32 {
    println!("Hello, wasmer-python!");
    1
}

fn get_sound_chip_type(sound_chip_type: u32) -> SoundChipType {
    match sound_chip_type {
        0 => SoundChipType::YM2149,
        1 => SoundChipType::YM2151,
        2 => SoundChipType::YM2203,
        3 => SoundChipType::YM2413,
        4 => SoundChipType::YM2608,
        5 => SoundChipType::YM2610,
        6 => SoundChipType::YM2612,
        7 => SoundChipType::YM3526,
        8 => SoundChipType::Y8950,
        9 => SoundChipType::YM3812,
        10 => SoundChipType::YMF262,
        11 => SoundChipType::YMF278B,
        12 => SoundChipType::SEGAPSG,
        13 => SoundChipType::SN76489,
        14 => SoundChipType::PWM,
        15 => SoundChipType::SEGAPCM,
        16 => SoundChipType::OKIM6258,
        _ => panic!("not supported sound chip type"),
    }
}
