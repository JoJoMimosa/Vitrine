/*! github.com/jojomimosa | MIT License */

// Usable tags
const tags = ['INPUT', 'TEXTAREA'];

const floatingLabel = () => {
  // Get the input fields
  let inputs = document.querySelectorAll('.flabel .flabel__input');

  // Handle user input on each input
  for (let input of inputs) {
    // If the tag is usable
    if (tags.indexOf(input.tagName) > -1) {
      input.addEventListener('input', onUserInput);
    }
  }
};

// When the user types
const onUserInput = (e) => {
  // Get the input and its associated label
  let input = e.target;
  let label = input.parentElement.querySelector('.flabel__label');

  // If the input is not empty
  if (input.value.length != '') {
    // If the label was hidden, show it
    if (!label.classList.contains('flabel__label--enabled')) {
      label.classList.add('flabel__label--enabled');
    }
  }
  // If the input is empty
  else {
    // If the label was enabled, hide it
    if (label.classList.contains('flabel__label--enabled')) {
      label.classList.remove('flabel__label--enabled');
    }
  }
};

export default floatingLabel;
