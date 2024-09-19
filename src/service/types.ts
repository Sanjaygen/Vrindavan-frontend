export interface ProductProps {
  id?: string;
  name: string;
  description: string;
  weightage: string;
  image: string | null;
  [key: string]: any; // Index signature to allow additional properties
}
