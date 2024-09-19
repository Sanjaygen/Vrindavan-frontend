
 export interface Row {
    category?: string;
    name: string;
    image: string;
    updatedAt: string;
    weightage: number;
    [key: string]: string | number | undefined;
}

export interface CategoriesTableProps {
    onEditClick: () => void; 
}

export interface CategoryProps {
    id: string;
    category_name?: string;
    updated_at?: string;
    updatedAt: string;
    name: string;
    description: string;
    weightage: string;
    image: string | null;
}

export interface ProductBrandProps {
    id: string;
    name: string;
    active: boolean;
}


export interface Column {
    id: string; 
    label: string; 
    accessor: string; 
  }
  
  export interface DashboardTableProps {
    columns: Column[]; 
    rows: Record<string, any>[]; 
    onEditClick: (id: string | number) => void;
    onDeleteClick: (id: string | number) => void;
  }