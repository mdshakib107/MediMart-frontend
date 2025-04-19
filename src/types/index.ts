export type TMedicine = {
  _id?: string; // optional because when creating, you might not have it yet
  name: string;
  brand: string;
  price: number;
  Img?: string;
  symptoms:
    | "Cough & Flu"
    | "Fever"
    | "Eye & Ear"
    | "Allergy"
    | "Skin & Hair"
    | "Diabetes";
  description: string;
  manufacturerDetails: string;
  genericName: string;
  strength: string;
  dosCategory: string;
  quantity: number;
  inStock?: boolean;
  expiryDate: string | Date;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};
