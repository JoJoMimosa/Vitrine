/*! github.com/jojomimosa | MIT License */

// Usable tags
const tags = ['INPUT', 'TEXTAREA'];

const floatingLabel = (selector) => {
  // Get all targets
  let targets = document.querySelectorAll(selector);

  for (let input of targets) {
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
  let label = input.form.querySelector(`[for=${input.id}]`);

  // If the input is not empty
  if (input.value.length != '') {
    // If the label was hidden, show it
    if (!label.classList.contains('form__label--enabled')) {
      label.classList.add('form__label--enabled');
    }
  }
  // If the input is empty
  else {
    // If the label was enabled, hide it
    if (label.classList.contains('form__label--enabled')) {
      label.classList.remove('form__label--enabled');
    }
  }
};

export default floatingLabel;
