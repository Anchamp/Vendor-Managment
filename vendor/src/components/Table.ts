import { state } from '../app.state';
import { formatVendorCount } from '../logic/helpers/data-helpers';
import { createElement } from '../utils/dom';
export function VendorTable(): HTMLDivElement {
  const container = createElement('div', 'table_container');
  // Header
  const header = createElement('div', 'section_title');
  const title = createElement('h2');
  title.textContent = 'Registered Vendors';

  const badge = createElement('span', 'vendor_count');
  badge.textContent = formatVendorCount(state.vendors.length);

  header.appendChild(title);
  header.appendChild(badge);
  // Table wrapper
  const wrapper = createElement('div', 'table_wrapper');
  const table = createElement('table');
  table.id = 'vendorTable';
  // Table head
  const thead = createElement('thead');
  const headerRow = createElement('tr');
  const headers = ['#', 'Business Name', 'Owner Name', 'Email', 'Phone', 'PAN', 'Actions'];
  headers.forEach((h) => {
    const th = createElement('th');
    th.textContent = h;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  // Table body
  const tbody = createElement('tbody');
  tbody.id = 'vendorTableBody';

  if (state.vendors.length === 0) {
    const emptyRow = createElement('tr');
    emptyRow.className = 'empty_row';
    const emptyCell = createElement('td');
    emptyCell.colSpan = 7;
    emptyCell.className = 'empty_message';

    const emptyState = createElement('div', 'empty_state');
    const p = createElement('p');
    p.textContent = 'No vendors registered yet';
    const small = createElement('small');
    small.textContent = 'Fill the form to add your first vendor';

    emptyState.appendChild(p);
    emptyState.appendChild(small);
    emptyCell.appendChild(emptyState);
    emptyRow.appendChild(emptyCell);
    tbody.appendChild(emptyRow);
  } else {
    state.vendors.forEach((vendor, index) => {
      const row = createElement('tr');
      // Serial number
      const td1 = createElement('td');
      td1.textContent = String(index + 1);
      // Business name
      const td2 = createElement('td');
      td2.textContent = vendor.businessName;
      // Owner name
      const td3 = createElement('td');
      td3.textContent = vendor.ownerName;
      // Email
      const td4 = createElement('td');
      td4.textContent = vendor.ownerEmail;
      // Phone
      const td5 = createElement('td');
      td5.textContent = vendor.ownerPhone;
      // PAN
      const td6 = createElement('td');
      td6.textContent = vendor.panNumber;
      // Actions
      const td7 = createElement('td');
      const editBtn = createElement('button', 'action_btn edit_btn');
      editBtn.textContent = 'Edit';
      editBtn.setAttribute('data-id', vendor.id);

      const deleteBtn = createElement('button', 'action_btn delete_btn');
      deleteBtn.textContent = 'Delete';
      deleteBtn.setAttribute('data-id', vendor.id);

      td7.appendChild(editBtn);
      td7.appendChild(deleteBtn);

      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      row.appendChild(td5);
      row.appendChild(td6);
      row.appendChild(td7);

      tbody.appendChild(row);
    });
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  wrapper.appendChild(table);

  container.appendChild(header);
  container.appendChild(wrapper);

  return container;
}
