import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  fetchCategories,
  fetchCategoriesById,
  createCategories,
  updateCategories,
  deleteCategories,
} from "@/service/page-service";
import { CategoriesProps} from "@/service/types";

export const useCategories = () => {
  return useQuery(["categories"], fetchCategories, {
    refetchOnWindowFocus: false,
  });
};
export const useCategoriesById = (categoriesId: number) => {
  return useQuery(["categories", categoriesId], () => fetchCategoriesById(categoriesId), {
    refetchOnWindowFocus: false,
  });
};

// Hook for creating a Categories
export const useCreateCategories = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategories,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};

// Hook for updating a Categories
export const useUpdateCategories = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: CategoriesProps }) =>
      updateCategories(id.toString(), payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};

// Hook for deleting a Categories
export const useDeleteCategories = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCategories(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
    onError: (error: Error) => {
      console.error('Error deleting Categories:', error);
    },
  });
};