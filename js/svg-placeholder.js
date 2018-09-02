/*! github.com/jojomimosa | MIT License */

const svgPlaceholder = (selector) => {
  // Get the targeted images
  let targets = document.querySelectorAll(selector);

  // Load the original for each targeted image
  for (let img of targets) {
    let original = new Image();
    original.src = img.dataset.original;
    /*original.onload = (e) => {
      console.log(e);
    }*/
  }
};

export default svgPlaceholder;
