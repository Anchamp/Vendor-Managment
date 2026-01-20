export function needsBusinessRegistration(businessType: string): boolean {
  const typesRequiringRegistration = ['partnership', 'private-limited', 'public-limited', 'llp'];
  return typesRequiringRegistration.includes(businessType);
}
export function isGstRegistered(taxStatus: string): boolean {
  return taxStatus === 'registered';
}
export function generateId(): string {
  return `vendor_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}
export function formatCategories(categories: string[]): string {
  return categories.join(', ');
}
export function normalizeString(value: string): string {
  return value.trim().toLowerCase();
}
