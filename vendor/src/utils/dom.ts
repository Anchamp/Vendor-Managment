export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  return element;
}

export function createLabel(text: string, required = false): HTMLLabelElement {
  const label = createElement('label');
  label.textContent = text;
  if (required) {
    label.classList.add('required');
  }
  return label;
}

export function createInput(type: string, name: string, required = false): HTMLInputElement {
  const input = createElement('input');
  input.type = type;
  input.name = name;
  input.required = required;
  return input;
}

export function createSelect(name: string, required = false): HTMLSelectElement {
  const select = createElement('select');
  select.name = name;
  select.required = required;
  return select;
}

export function createOption(value: string, text: string): HTMLOptionElement {
  const option = createElement('option');
  option.value = value;
  option.textContent = text;
  return option;
}

export function createTextarea(name: string, rows = 4): HTMLTextAreaElement {
  const textarea = createElement('textarea');
  textarea.name = name;
  textarea.rows = rows;
  return textarea;
}

export function createButton(
  text: string,
  type: 'submit' | 'button' | 'reset' = 'button',
): HTMLButtonElement {
  const button = createElement('button');
  button.type = type;
  button.textContent = text;
  return button;
}

export function showError(element: HTMLElement, message: string): void {
  const parent = element.closest('.form_group');
  if (!parent) {
    return;
  }
  parent.classList.add('error');
  parent.classList.remove('valid');
  const errorSpan = parent.querySelector('.error_message');
  if (errorSpan) {
    errorSpan.textContent = message;
  }
}

export function clearError(element: HTMLElement): void {
  const parent = element.closest('.form_group');
  if (!parent) {
    return;
  }
  parent.classList.remove('error');
  const errorSpan = parent.querySelector('.error_message');
  if (errorSpan) {
    errorSpan.textContent = '';
  }
}

export function setValid(element: HTMLElement): void {
  const parent = element.closest('.form_group');
  if (!parent) {
    return;
  }
  parent.classList.remove('error');
  parent.classList.add('valid');
}
