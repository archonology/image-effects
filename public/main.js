function init() {
  const input = document.getElementById("upload");
  // FileReader returns a string, easily managed by browsers and languages
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    // make sure to remove the metadata with replace
    const base64 = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      ""
    );
    console.log(input.files[0]);
    console.log(base64);
  };

  input.addEventListener("change", () => {
    fileReader.readAsDataURL(input.files[0]);
  });
}

init();
