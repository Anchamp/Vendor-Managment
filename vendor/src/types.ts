export interface VendorData {
  id: string;
  businessType: string;
  businessName: string;
  businessRegistration?: string;
  panNumber: string;
  operatingSince: string;
  categories: string[];
  monthlySales: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  ownerDob: string;
  businessAddress: string;
  businessPincode: string;
  warehouseLocation?: string;
  accountHolder: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  taxStatus: string;
  gstNumber?: string;
  storeName: string;
  storeDescription?: string;
  currency: string;
  shippingPolicy: boolean;
  returnPolicy: boolean;
  qualityAssurance: boolean;
  termsConditions: boolean;
}

export interface FormState {
  editingId: string | null;
  isEditMode: boolean;
}

export interface AppState {
  vendors: VendorData[];
  form: FormState;
}