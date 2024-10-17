import { Column } from "@/types/inventory";

export const ProductsColumns: Column[] = [
  { id: "sno", label: "Sno.", accessor: "sno" },
  { id: "name", label: "Name", accessor: "name" },
  {
    id: "trackInventory",
    label: "Track Inventory",
    accessor: "trackInventory",
  },
  { id: "image", label: "Image", accessor: "image" },
  { id: "price", label: "Price", accessor: "price" },
  { id: "discountPrice", label: "Discount Price", accessor: "discountPrice" },
  { id: "totalProduct", label: "Total Product", accessor: "totalProduct" },
  { id: "stockUpdate", label: "Stock Update", accessor: "stockUpdate" },
  { id: "unitSize", label: "Unit Size", accessor: "unitSize" },
  { id: "weightage", label: "Weightage", accessor: "weightage" },
  { id: "actions", label: "Actions", accessor: "actions" },
];

export const CategoriesColumns: Column[] = [
  { id: "name", label: "Name", accessor: "name" },
  { id: "image", label: "Image", accessor: "image" },
  { id: "weightage", label: "Weightage", accessor: "weightage" },
  { id: "updated_at", label: "UpdateAt", accessor: "updated_at" },
  { id: "actions", label: "Actions", accessor: "actions" },
];
export const SubCategoriesColumns: Column[] = [
  { id: "category_name", label: "Category Name", accessor: "category_name" },
  { id: "name", label: "Name", accessor: "name" },
  { id: "image", label: "Image", accessor: "image" },
  { id: "weightage", label: "Weightage", accessor: "weightage" },
  { id: "updated_at", label: "Updated At", accessor: "updated_at" }, 
  { id: "actions", label: "Actions", accessor: "actions" },
];
export const ProductBrandsColumns: Column[] = [
  { id: "name", label: "Name", accessor: "name",align: 'left' },
  { id: "active", label: "Active", accessor: "active",align: 'center', },
  { id: "actions", label: "Actions", accessor: "actions", align: 'right', },
];
export const ProductTypesColumns: Column[] = [
  { id: "name", label: "Name", accessor: "name",align: 'left' },
  { id: "weightage", label: "Weightage", accessor: "weightage",align: 'right',  },
  { id: "active", label: "Active", accessor: "active",align: 'right', },
  { id: "actions", label: "Actions", accessor: "actions", align: 'right', },
];
export const DeliveryAddressesColumns: Column[] = [
  { id: "name", label: "Customer Name", accessor: "name",align: 'left' },
  { id: "mobileno", label: "Mobile No", accessor: "mobileno",align: 'left',},
  { id: "addresses", label: "Addresses", accessor: "addresses",align: 'left',},
  { id: "active", label: "Approve Status", accessor: "active",align: 'right', },
  { id: "date", label: "Created Date", accessor: "date",align: 'right', }, 
  { id: "actions", label: "Actions", accessor: "actions", align: 'right', },
];