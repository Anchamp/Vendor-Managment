import { createElement, createButton } from '../utils/dom';
export function VendorForm(): HTMLDivElement {
  const container = createElement('div', 'form_container');
  // Header
  const header = createElement('div', 'section_title');
  const title = createElement('h2');
  title.textContent = 'Register Vendor';
  header.appendChild(title);
  // Form
  const form = createElement('form');
  form.id = 'vendorForm';
  form.setAttribute('novalidate', 'true');
  // Placeholder
  const section = createElement('section', 'form_section');
  const h3 = createElement('h3');
  h3.textContent = 'Business Details';

  const formGroup = createElement('div', 'form_group');
  const label = createElement('label');
  label.textContent = 'Business Name';
  label.classList.add('required');

  const input = createElement('input');
  input.type = 'text';
  input.name = 'businessName';
  input.placeholder = 'Enter business name';
  input.required = true;

  const errorSpan = createElement('span', 'error_message');

  formGroup.appendChild(label);
  formGroup.appendChild(input);
  formGroup.appendChild(errorSpan);
  section.appendChild(h3);
  section.appendChild(formGroup);
  // Actions
  const actions = createElement('div', 'form_actions');
  const submitBtn = createButton('SUBMIT', 'submit');
  submitBtn.className = 'btn_primary';
  const resetBtn = createButton('Clear Form', 'reset');
  resetBtn.className = 'btn_secondary';

  actions.appendChild(submitBtn);
  actions.appendChild(resetBtn);

  form.appendChild(section);
  form.appendChild(actions);

  container.appendChild(header);
  container.appendChild(form);

  return container;
}
