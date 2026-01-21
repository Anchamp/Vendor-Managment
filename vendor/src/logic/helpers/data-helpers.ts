import type { VendorData } from '../../types';
export function getVendorCount(vendors: VendorData[]): number {
  return vendors.length;
}
export function formatVendorCount(count: number): string {
  return `${count} vendor${count !== 1 ? 's' : ''}`;
}
export function findVendorById(vendors: VendorData[], id: string): VendorData | undefined {
  return vendors.find((vendor) => vendor.id === id);
}
export function getVendorIndex(vendors: VendorData[], id: string): number {
  return vendors.findIndex((vendor) => vendor.id === id);
}
