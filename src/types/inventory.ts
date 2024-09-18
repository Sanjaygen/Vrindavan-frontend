export interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'left' | 'center' | 'right';
    format?: (value: number | string) => string;
}

 export interface Row {
    category?: string;
    name: string;
    image: string;
    updatedAt: string;
    weightage: number;
    [key: string]: any;
}

export interface CategoriesTableProps {
    onEditClick: () => void; 
}

export interface DashboardTableProps {
    columns: Column[];
    rows: Row[];
    onEditClick: (id: string | number) => void;
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