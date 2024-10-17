import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createSubCategories,
  updateSubCategories,
  deleteSubCategories,
  fetchSubCategoriesById,
  fetchSubCategories,
} from "@/service/page-service";
import {  SubCategoriesProps} from "@/service/types";

export const useSubCategories = () => {
  return useQuery(["subcategories"], fetchSubCategories, {
    refetchOnWindowFocus: false,
  });
};
export const useSubCategoriesById = (subCategoriesId: number) => {
  return useQuery(["subcategories", subCategoriesId], () => fetchSubCategoriesById(subCategoriesId), {
    refetchOnWindowFocus: false,
  });
};

// Hook for creating a SubCategories
export const useCreateSubCategories = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSubCategories,
    onSuccess: () => {
      queryClient.invalidateQueries(["subcategories"]);
    },
  });
};

// Hook for updating a SubCategories
export const useUpdateSubCategories = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: SubCategoriesProps }) =>
      updateSubCategories(id.toString(), payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["subcategories"]);
    },
  });
};

// Hook for deleting a SubCategories
export const useDeleteSubCategories = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteSubCategories(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["subcategories"]);
    },
    onError: (error: Error) => {
      console.error('Error deleting subcategories:', error);
    },
  });
};