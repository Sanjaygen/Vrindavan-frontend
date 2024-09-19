// Define your columns with formatting functions as needed
export const columns: any[] = [
    { id: 'sNo', label: 'S No', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'trackInventory', label: 'Track Inventory', minWidth: 40 },
    { id: 'image', label: 'Image', minWidth: 100 },
    {
      id: 'price',
      label: 'Price',
      minWidth: 40,
      align: 'right',
      format: (value: number | string) =>
        typeof value === 'number' ? `$${value.toFixed(2)}` : value,
    },
    {
      id: 'discountPrice',
      label: 'Discount Price',
      minWidth: 40,
      align: 'right',
      format: (value: number | string) =>
        typeof value === 'number' ? `$${value.toFixed(2)}` : value,
    },
    {
      id: 'totalProduct',
      label: 'Total Product',
      minWidth: 30,
      align: 'right',
      format: (value: number | string) =>
        typeof value === 'number' ? value.toLocaleString('en-US') : value,
    },
    { id: 'stockUpdate', label: 'Stock Update', minWidth: 150 },
    { id: 'unitSize', label: 'Unit Size', minWidth: 30 },
    {
      id: 'weightage',
      label: 'Weightage',
      minWidth: 20,
      align: 'right',
      format: (value: number | string) =>
        typeof value === 'number' ? `${value.toFixed(2)} kg` : value,
    },
    { id: 'action', label: 'Action', minWidth: 100, align: 'center' },
  ];
  
  // Define your rows with appropriate data
  export const rows: any[] = [
    {
      sNo: 1,
      name: 'Product A',
      trackInventory: 'Yes',
      image: 'image-url-a',
      price: 20.5,
      discountPrice: 15.0,
      totalProduct: 1000,
      stockUpdate: '2024-09-18',
      unitSize: 'Medium',
      weightage: 1.5,
      action: 'Edit',
    },
    {
      sNo: 2,
      name: 'Product B',
      trackInventory: 'No',
      image: 'image-url-b',
      price: 30.0,
      discountPrice: 25.0,
      totalProduct: 500,
      stockUpdate: '2024-09-17',
      unitSize: 'Large',
      weightage: 2.0,
      action: 'Edit',
    },
    // Add more rows as needed
  ];
  