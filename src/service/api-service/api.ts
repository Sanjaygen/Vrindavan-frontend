import { ServiceApi } from "@/config/ServiceConfig";

const handleResponse = async (response: Response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
};

const buildHeaders = async (options: RequestInit) => {
  const headers = new Headers(options.headers || {});
  if (!(options.body instanceof FormData)) {
    headers.append("Content-Type", "application/json");
  }
  headers.append("Authorization", `Bearer YOUR_TOKEN_HERE`);
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
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

export const get = async <T>(url: string): Promise<T> => {
  return customFetch(url, { method: "GET" });
};

export const post = async <T>(url: string, data: any): Promise<T> =>
  customFetch(url, { method: "POST", body: JSON.stringify(data) });

export const update = async <T>(url: string, data: any): Promise<T> =>
  customFetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
  });
