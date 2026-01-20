import type { VendorData } from "./types";
// ID Generation
export function generateId(): string{
    return `vendor_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}
//Validations
export function validateBusinessType(value : string) : string{
    if (!value) {
        return 'You must select a business type';
    }
    return '';
}
export function validateBusinessName(value: string) : string {
    if(!value){
        return 'Business name cannot be empty';
    }
    if (value.length <3) {
        return 'Business name should have at least 3 charactes';
    }
    if (value.length > 100) {
        return 'Business name cannot exceed 100 characters';
    }
    return '';
}
export function validatePanNumber(value: string) : string {
    if (!value){
        return 'Pan number required';
    }
    const panFormat =  /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panFormat.test(value.toLocaleUpperCase())) {
        return 'Invalid PAN Format.'
    }
    return '';
}
export function validateEmail(value: string): string {
    if (!value) {
        return 'Email address required';
    }
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(value)){
        return 'Enter a valid email address';
    }
    return '';
}
export function validatePhone(value: string): string {
    if (!value){
        return 'Phone number is required';
    }
    const phoneFormat = /^[0-9]{10}$/;
    if (!phoneFormat.test(value)){
        return 'phone number should be exactly 10 digits';
    }
    return '';
}
export function validatePincode(value : string): string {
    if (!value){
        return 'pincode is required';
    }
    const pincodeFormat = /^[0-9]{6}$/;
    if (!pincodeFormat.test(value)) {
    return 'Pincode should be exactly 6 digits';
    }
    return '';
}
export function validateCategories(selected: string[]): string{
    if (selected.length === 0) {
        return 'Select at least one business category';
    }
    return '';
}
export function validateStoreName(value: string): string {
    if (!value) {
        return 'Store name is required';
    }
    if (value.length < 5) {
        return 'Store name must be at least 5 characters';
    }
    if (value.length > 50){
        return 'Store name cannot exceed 50 characters';
    }
    return '';
}
//Business logic
export function needsBusinessRegistration(businessType: string): boolean {
  return ['partnership', 'private-limited', 'public-limited', 'llp'].includes(businessType);
}
export function isGstRegistered(taxStatus: string): boolean {
  return taxStatus === 'registered';
}
//Derived Data
export function getVendorCount(vendors: VendorData[]): number {
    return vendors.length;
}
export function formatVendorCount(count: number): string {
    return `${count} vendor${count !== 1 ? 's' : ''}`;
}