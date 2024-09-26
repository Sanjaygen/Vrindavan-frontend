import { get, post, update, del } from "./api-service/api";
import { ProductProps } from "./types";

interface FetchProductsResponse {
  foods: ProductProps[];
  total: number;
}

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
