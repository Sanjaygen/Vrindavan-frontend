import { get, post, update, del } from "./api-service/api";
import { CategoriesProps, ProductProps, SubCategoriesProps } from "./types";

interface FetchProductsResponse {
  foods: ProductProps[];
  total: number;
}
//categories
export const fetchCategories = async (): Promise<CategoriesProps[]> => {
  const response = await get< CategoriesProps[] >(`categories`);
  return response;
};

export const fetchCategoriesById = async (id: number): Promise<CategoriesProps> => {
  const response = await get<CategoriesProps>(`categories/${id}`);
  return response;
};
export const createCategories = async (payload: CategoriesProps): Promise<CategoriesProps> => {
  const response = await post<{ data: CategoriesProps }>("categories", payload);
  return response.data;
};

export const updateCategories = async (id: string, payload: CategoriesProps): Promise<CategoriesProps> => {
  const response = await update<{ data: CategoriesProps }>(`categories/${id}`, payload);
  return response.data;
};
export const deleteCategories = async (id: string): Promise<void> => {
  await del(`categories/${id}`);
};
//products
export const fetchProducts = async (): Promise<FetchProductsResponse> => {
  const response = await get<FetchProductsResponse>(`foods`);
  return response;
};

export const fetchProductById = async (id: number): Promise<ProductProps> => {
  const response = await get<ProductProps>(`foods/${id}`);
  return response;
};

export const createProduct = async (payload: ProductProps): Promise<ProductProps> => {
  const response = await post<{ data: ProductProps }>("foods", payload);
  return response.data;
};

  export const updateProduct = async (
    id: string,
    payload: ProductProps
  ): Promise<ProductProps> => {
    const response = await update<{ data: ProductProps }>(`foods/${id}`, payload);
    return response.data;
  };

export const deleteProduct = async (id: string): Promise<void> => {
  await del(`foods/${id}`);
};
//subcategories
export const fetchSubCategories = async (): Promise<SubCategoriesProps[]> => {
  const response = await get< SubCategoriesProps[] >(`subcategories`);
  return response;
  
};
export const fetchSubCategoriesById = async (id: number): Promise<SubCategoriesProps> => {
  const response = await get<SubCategoriesProps>(`subcategories/${id}`);
  return response;
};
export const createSubCategories = async (payload: SubCategoriesProps): Promise<SubCategoriesProps> => {
  const response = await post<{ data: SubCategoriesProps }>("subcategories", payload);
  return response.data;
};


export const updateSubCategories = async (id: string, payload: SubCategoriesProps): Promise<SubCategoriesProps> => {
  const response = await update<{ data: SubCategoriesProps }>(`subcategories/${id}`, payload);
  return response.data;
};
export const deleteSubCategories = async (id: string): Promise<void> => {
  await del(`subcategories/${id}`);
};