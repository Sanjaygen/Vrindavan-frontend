import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  fetchProducts,
  fetchProductById,
} from "@/service/page-service";
import { ProductProps } from "@/service/types";

export const useProducts = () => {
  return useQuery(["foods"], fetchProducts, {
    refetchOnWindowFocus: false,
  });
};
export const useProductById = (productId: number) => {
  return useQuery(["foods", productId], () => fetchProductById(productId), {
    refetchOnWindowFocus: false,
  });
};

// Hook for creating a product
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["foods"]);
    },
  });
};

// Hook for updating a product
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: ProductProps }) =>
      updateProduct(id.toString(), payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["foods"]);
    },
  });
};

// Hook for deleting a product
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["foods"]);
    },
    onError: (error: Error) => {
      console.error('Error deleting product:', error);
    },
  });
};