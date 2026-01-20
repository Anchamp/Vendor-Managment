export function validateShippingPolicy(checked: boolean): string {
  if (!checked) {
    return 'You must agree to the shipping policy';
  }
  return '';
}
export function validateReturnPolicy(checked: boolean): string {
  if (!checked) {
    return 'You must agree to the return and refund policy';
  }
  return '';
}
export function validateQualityAssurance(checked: boolean): string {
  if (!checked) {
    return 'You must commit to quality assurance standards';
  }
  return '';
}
export function validateTermsConditions(checked: boolean): string {
  if (!checked) {
    return 'You must accept the terms and conditions';
  }
  return '';
}
