export interface ProductProps {
  id: string | number;
  name: string;
  description: string;
  weightage: string;
  image: string | null;
  [key: string]: unknown; 
}
export interface ProductListProps extends ProductProps {
  sno: number; 
  actions: React.JSX.Element; 
}