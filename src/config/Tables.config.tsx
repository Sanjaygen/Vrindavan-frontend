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
  { id: "weightage", label: "Weightage", accessor: "weightage" },
  { id: "actions", label: "Actions", accessor: "actions" },
];