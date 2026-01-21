export function validateAccountHolder(value: string): string {
  if (!value) {
    return 'Account holder name is required';
  }
  if (value.length < 3) {
    return 'Enter a valid account holder name';
  }
  return '';
}
export function validateBankName(value: string): string {
  if (!value) {
    return 'Please select a bank';
  }
  return '';
}
export function validateAccountNumber(value: string): string {
  if (!value) {
    return 'Account number is required';
  }
  const accPattern = /^[0-9]{10,18}$/;
  if (!accPattern.test(value)) {
    return 'Account number must be 10-18 digits';
  }
  return '';
}
export function validateIfscCode(value: string): string {
  if (!value) {
    return 'IFSC code is required';
  }
  const ifscPattern = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  if (!ifscPattern.test(value.toUpperCase())) {
    return 'Invalid IFSC format. Expected: ABCD0123456';
  }
  return '';
}
