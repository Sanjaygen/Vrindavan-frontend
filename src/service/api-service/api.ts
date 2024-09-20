import { ServiceApi } from "../../config/ServiceConfig";

interface ApiResponse<T> {
  data: T;
  message?: string;
}

const handleResponse = async <T>(response: Response): Promise<T> => {
  const data: ApiResponse<T> = await response.json();
  if (!response.ok) {
    const errorMessage = data.message || "Something went wrong";
    console.error("API Error:", errorMessage);
    throw new Error(errorMessage);
  }
  return data.data;
};

const buildHeaders = async (options: RequestInit): Promise<Headers> => {
  const headers = new Headers(options.headers || {});
  if (!(options.body instanceof FormData)) {
    headers.append("Content-Type", "application/json");
  }
  const token = "YOUR_TOKEN_HERE";
  headers.append("Authorization", `Bearer ${token}`);
  return headers;
};

const customFetch = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const { baseUrl } = ServiceApi;
  try {
    const headers = await buildHeaders(options);
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      ...options,
      headers,
    });
    return handleResponse<T>(response);
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

export const get = async <T>(url: string): Promise<T> => {
  return customFetch<T>(url, { method: "GET" });
};

export const post = async <T>(
  url: string,
  data: Record<string, unknown>
): Promise<T> =>
  customFetch<T>(url, { method: "POST", body: JSON.stringify(data) });

export const update = async <T>(
  url: string,
  data: Record<string, unknown>
): Promise<T> =>
  customFetch<T>(url, { method: "PUT", body: JSON.stringify(data) });

export const del = async <T>(url: string): Promise<T> =>
  customFetch<T>(url, { method: "DELETE" });
