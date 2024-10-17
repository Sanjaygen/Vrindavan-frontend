 export interface FormDataProps {
  name: string;
  description: string;
  price: number;
  discount_price: number;
  product_type_id: string;
  product_brand_id: string;
  locality_id: string;
  weightage: string;
  unit_size: string;
  barcode?: string;
  cgst?: string;
  sgst?: string;
  sku_code: string;
  category_id: string;
  subcategory_id: string;
  featured: boolean;
  subscription: boolean;
  track_inventory: boolean;
  active: boolean;
  }
  
  export interface CreateBoxProps {
    image: string | null;
    fileInputRef: React.RefObject<HTMLInputElement>;
    handleUploadClick: () => void;
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleRemoveImage: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  }
  