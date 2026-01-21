import { createElement } from '../utils/dom';
export function createBusinessSection(): HTMLElement {
  const section = createElement('section', 'form_section');
  const h3 = createElement('h3');
  h3.textContent = 'Business Details';
  section.appendChild(h3);

  // Business Type (radio)
  const btGroup = createElement('div', 'form_group');
  const btLabel = createElement('label');
  btLabel.textContent = 'Type of Business';
  btLabel.classList.add('required');
  const radioGroup = createElement('div', 'radio_group');

  const types = [
    { value: 'sole-proprietorship', label: 'Sole Proprietorship' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'private-limited', label: 'Private Limited Company' },
    { value: 'public-limited', label: 'Public Limited Company' },
    { value: 'llp', label: 'Limited Liability Partnership (LLP)' },
  ];

  types.forEach((t) => {
    const radioLabel = createElement('label', 'radio_label');
    const radio = createElement('input');
    radio.type = 'radio';
    radio.name = 'businessType';
    radio.value = t.value;
    radio.required = true;

    // Add change listener inline
    radio.addEventListener('change', handleBusinessTypeChange);

    const span = createElement('span');
    span.textContent = t.label;
    radioLabel.appendChild(radio);
    radioLabel.appendChild(span);
    radioGroup.appendChild(radioLabel);
  });

  const btError = createElement('span', 'error_message');
  btGroup.appendChild(btLabel);
  btGroup.appendChild(radioGroup);
  btGroup.appendChild(btError);
  section.appendChild(btGroup);

  // Business Name
  section.appendChild(createTextInput('businessName', 'Business Name', true));

  // Business Registration (conditional)
  const regGroup = createTextInput('businessRegistration', 'Business Registration Number');
  regGroup.id = 'registrationGroup';
  regGroup.style.display = 'none';
  section.appendChild(regGroup);

  // PAN Number
  section.appendChild(createTextInput('panNumber', 'PAN Number', true, 'ABCDE1234F'));

  // Operating Since
  const opGroup = createElement('div', 'form_group');
  const opLabel = createElement('label');
  opLabel.textContent = 'Operating Since';
  opLabel.classList.add('required');
  const opInput = createElement('input');
  opInput.type = 'date';
  opInput.name = 'operatingSince';
  opInput.required = true;
  const opError = createElement('span', 'error_message');
  opGroup.appendChild(opLabel);
  opGroup.appendChild(opInput);
  opGroup.appendChild(opError);
  section.appendChild(opGroup);

  // Categories (checkboxes)
  const catGroup = createElement('div', 'form_group');
  const catLabel = createElement('label');
  catLabel.textContent = 'Business Categories';
  catLabel.classList.add('required');
  const checkGroup = createElement('div', 'checkbox_group');

  const categories = [
    'electronics',
    'fashion',
    'home',
    'beauty',
    'sports',
    'books',
    'toys',
    'automotive',
  ];

  categories.forEach((cat) => {
    const checkLabel = createElement('label', 'checkbox_label');
    const checkbox = createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'categories';
    checkbox.value = cat;
    const span = createElement('span');
    span.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    checkLabel.appendChild(checkbox);
    checkLabel.appendChild(span);
    checkGroup.appendChild(checkLabel);
  });

  const catError = createElement('span', 'error_message');
  catGroup.appendChild(catLabel);
  catGroup.appendChild(checkGroup);
  catGroup.appendChild(catError);
  section.appendChild(catGroup);

  // Monthly Sales
  const salesGroup = createElement('div', 'form_group');
  const salesLabel = createElement('label');
  salesLabel.textContent = 'Monthly Sales Estimate';
  salesLabel.classList.add('required');
  const salesSelect = createElement('select');
  salesSelect.name = 'monthlySales';
  salesSelect.required = true;

  const salesOptions = [
    { value: '', text: 'Select sales range' },
    { value: '0-50k', text: '₹0 - ₹50,000' },
    { value: '50k-1L', text: '₹50,000 - ₹1,00,000' },
    { value: '1L-5L', text: '₹1,00,000 - ₹5,00,000' },
    { value: '5L-10L', text: '₹5,00,000 - ₹10,00,000' },
    { value: '10L-50L', text: '₹10,00,000 - ₹50,00,000' },
    { value: '50L+', text: '₹50,00,000+' },
  ];

  salesOptions.forEach((opt) => {
    const option = createElement('option');
    option.value = opt.value;
    option.textContent = opt.text;
    salesSelect.appendChild(option);
  });

  const salesError = createElement('span', 'error_message');
  salesGroup.appendChild(salesLabel);
  salesGroup.appendChild(salesSelect);
  salesGroup.appendChild(salesError);
  section.appendChild(salesGroup);

  return section;
}

function handleBusinessTypeChange(e: Event): void {
  const target = e.target as HTMLInputElement;
  const regGroup = document.getElementById('registrationGroup');
  if (!regGroup) {
    return;
  }

  const needsReg = ['partnership', 'private-limited', 'public-limited', 'llp'].includes(
    target.value,
  );
  regGroup.style.display = needsReg ? 'block' : 'none';

  const input = regGroup.querySelector('input');
  if (input) {
    input.required = needsReg;
    if (!needsReg) {
      input.value = '';
    }
  }
}

function createTextInput(
  name: string,
  label: string,
  required = false,
  placeholder = '',
): HTMLDivElement {
  const group = createElement('div', 'form_group');
  const labelEl = createElement('label');
  labelEl.textContent = label;
  if (required) {
    labelEl.classList.add('required');
  }
  const input = createElement('input');
  input.type = 'text';
  input.name = name;
  input.required = required;
  if (placeholder) {
    input.placeholder = placeholder;
  }
  const error = createElement('span', 'error_message');
  group.appendChild(labelEl);
  group.appendChild(input);
  group.appendChild(error);
  return group;
}
