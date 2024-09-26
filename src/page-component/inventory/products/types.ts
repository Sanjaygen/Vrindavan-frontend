 export interface FormDataProps {
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  productType: string;
  productBrand: string;
  locality: string;
  weightage: string;
  unitSize: string;
  skuCode?: string;
  barcode?: string;
  cgst?: string;
  sgst?: string;
  category: string;
  subCategory: string;
  featured: boolean;
  subscription: boolean;
  trackInventory: boolean;
  active: boolean;

  }
  
  export interface CreateBoxProps {
    image: string | null;
    fileInputRef: React.RefObject<HTMLInputElement>;
    handleUploadClick: () => void;
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleRemoveImage: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  }
  