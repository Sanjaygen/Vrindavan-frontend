export interface ProductProps {
  id: string | number;
  name: string;
  description: string;
  weightage: string;
  category_id: number,
  image: string | null;
  [key: string]: unknown; 
}
export interface ProductListProps extends ProductProps {
  sno: number; 
  actions: React.JSX.Element; 
}

export interface CategoriesProps {
  id: string | number;
  category_name?: string;
  updated_at?: string;
  updatedAt?: string;
  name: string;
  description: string;
  weightage: string;
  image: string | null;
  [key: string]: unknown; 
}
export interface CategoriesListProps extends CategoriesProps {
  sno: number; 
  actions: React.JSX.Element; 
}

export interface SubCategoriesProps {
  id: string | number;
  category_name?: string;
  updated_at?: string;
  updatedAt?: string;
  name: string;
  description: string;
  weightage: string;
  image: string | null;
  [key: string]: unknown; 
}
export interface SubCategoriesListProps extends SubCategoriesProps {
  sno: number;
  actions: React.JSX.Element;
}