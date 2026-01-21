import type { VendorData } from '../../types';
export function validateOwnerName(value: string): string {
  if (!value) {
    return 'Owner name is mandatory';
  }
  if (value.length < 2) {
    return 'Enter a valid name';
  }
  return '';
}
export function validateEmail(value: string): string {
  if (!value) {
    return 'Email address is required';
  }
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailFormat.test(value)) {
    return 'Enter a valid email address';
  }
  return '';
}
export function validateEmailUniqueness(
  value: string,
  vendors: VendorData[],
  excludeId?: string,
): string {
  const duplicate = vendors.find(
    (v) => v.ownerEmail.toLowerCase() === value.toLowerCase() && v.id !== excludeId,
  );
  if (duplicate) {
    return 'This email is already in use. Try a different one';
  }
  return '';
}
export function validatePhone(value: string): string {
  if (!value) {
    return 'Phone number is required';
  }
  const phoneFormat = /^[0-9]{10}$/;
  if (!phoneFormat.test(value)) {
    return 'Phone number should be exactly 10 digits';
  }
  if (value[0] < '6') {
    return 'Mobile number should start with 6, 7, 8, or 9';
  }
  return '';
}
export function validateOwnerDob(value: string): string {
  if (!value) {
    return 'Date of birth is required';
  }
  const birthDate = new Date(value);
  const currentDate = new Date();
  let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();
  const dayDiff = currentDate.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    calculatedAge--;
  }

  if (calculatedAge < 18) {
    return 'Owner must be at least 18 years old';
  }
  if (calculatedAge > 100) {
    return 'Please verify the date of birth';
  }
  return '';
}
export function validateBusinessAddress(value: string): string {
  if (!value) {
    return 'Business address is required';
  }
  if (value.length < 10) {
    return 'Please provide a complete address';
  }
  return '';
}
export function validatePincode(value: string): string {
  if (!value) {
    return 'Pincode is required';
  }
  const pincodeFormat = /^[0-9]{6}$/;
  if (!pincodeFormat.test(value)) {
    return 'Pincode should be exactly 6 digits';
  }
  return '';
}
