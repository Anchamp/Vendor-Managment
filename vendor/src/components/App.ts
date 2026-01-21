import { VendorForm } from './Form';
import { VendorTable } from './Table';
import { createElement } from '../utils/dom';

export function renderApp(): void {
  const root = document.getElementById('app');
  if (!root) {
    throw new Error('Root element not found');
  }
  root.innerHTML = '';

  const container = createElement('div', 'main_container');
  container.appendChild(VendorForm());
  container.appendChild(VendorTable());

  root.appendChild(container);
}
