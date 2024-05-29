use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;
use base64::prelude::*;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) {
    log(&"Grayscale called".into());

    let base64_to_vector = BASE64_STANDARD.decode(encoded_file).unwrap();
    log(&"Image decoded".into())
}
