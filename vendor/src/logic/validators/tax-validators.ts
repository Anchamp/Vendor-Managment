export function validateTaxStatus(value: string): string {
  if (!value) {
    return 'Please select tax registration status';
  }
  return '';
}
export function validateGstNumber(value: string, taxStatus: string): string {
  if (taxStatus === 'registered') {
    if (!value) {
      return 'GST number is required for registered businesses';
    }
    const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    if (!gstPattern.test(value.toUpperCase())) {
      return 'Invalid GST format. Expected: 22AAAAA0000A1Z5';
    }
  }
  return '';
}
