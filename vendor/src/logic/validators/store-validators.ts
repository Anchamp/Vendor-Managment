import type { VendorData } from '../../types';
export function validateStoreName(value: string): string {
  if (!value) {
    return 'Store name is required';
  }
  if (value.length < 5) {
    return 'Store name must be at least 5 characters';
  }
  if (value.length > 50) {
    return 'Store name cannot exceed 50 characters';
  }
  return '';
}
export function validateStoreNameUniqueness(
  value: string,
  vendors: VendorData[],
  excludeId?: string,
): string {
  const duplicate = vendors.find(
    (v) => v.storeName.toLowerCase() === value.toLowerCase() && v.id !== excludeId,
  );
  if (duplicate) {
    return 'This store name is already taken. Choose a different one';
  }
  return '';
}

export function validateStoreDescription(value: string): string {
  if (value && value.length > 500) {
    return 'Description cannot exceed 500 characters';
  }
  return '';
}

export function validateCurrency(value: string): string {
  if (!value) {
    return 'Please select a currency';
  }
  return '';
}
