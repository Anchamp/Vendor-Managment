export function validateBusinessType(value: string): string {
  if (!value) {
    return 'You must select a business type';
  }
  return '';
}
export function validateBusinessName(value: string): string {
  if (!value) {
    return 'Business name cannot be empty';
  }
  if (value.length < 3) {
    return 'Business name should have at least 3 characters';
  }
  if (value.length > 100) {
    return 'Business name cannot exceed 100 characters';
  }
  return '';
}
export function validateBusinessRegistration(value: string, businessType: string): string {
  const typesRequiringRegistration = ['partnership', 'private-limited', 'public-limited', 'llp'];

  if (typesRequiringRegistration.includes(businessType)) {
    if (!value) {
      return 'Registration number is mandatory for this business type';
    }
    if (value.length < 5) {
      return 'Enter a valid registration number';
    }
  }
  return '';
}
export function validatePanNumber(value: string): string {
  if (!value) {
    return 'PAN number is required';
  }
  const panFormat = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (!panFormat.test(value.toUpperCase())) {
    return 'Invalid PAN format. Expected format: ABCDE1234F';
  }
  return '';
}
export function validateOperatingSince(value: string): string {
  if (!value) {
    return 'Operating since date is required';
  }
  const opDate = new Date(value);
  const currentDate = new Date();
  if (opDate > currentDate) {
    return 'Operating date cannot be in the future';
  }
  return '';
}
export function validateCategories(selected: string[]): string {
  if (selected.length === 0) {
    return 'Select at least one business category';
  }
  return '';
}
export function validateMonthlySales(value: string): string {
  if (!value) {
    return 'Please select monthly sales estimate';
  }
  return '';
}
