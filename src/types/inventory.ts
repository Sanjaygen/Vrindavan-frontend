
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


export interface ProductBrandProps {
    id: string;
    name: string;
    active: boolean;
}


export interface Column {
    id: string; 
    label: string; 
    accessor: string; 
    minWidth?: number;
    align?: "right" | "left" | "center";
  }
  export interface TableRow {
    id: string | number;
    name: string;
    image?: string | null; 
    weightage?: number; 
    updatedAt: string;
    [key: string]: unknown; 
  }
  export interface DashboardTableProps {
    columns: Column[]; 
    rows: Record<string, any>[]; 
    onEditClick: (id: string | number) => void;
    onDeleteClick: (id: string | number) => void;
  }