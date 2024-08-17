import { type HttpAdapter as IHttpAdapter } from "@/types";

export class HttpAdapter implements IHttpAdapter {
  async post<T>(
    url: string,
    body: any,
    headers: Record<string, string> = {},
    timeout = 5000
  ): Promise<T> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(body),
      });
      return (await response.json()) as T;
    } catch (error) {
      console.log(error);
      clearTimeout(id);
      throw error;
    }
  }

  async get<T>(
    url: string,
    headers: Record<string, string> = {},
    timeout = 5000
  ): Promise<T> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
      return (await response.json()) as T;
    } catch (error) {
      console.log(error);
      clearTimeout(id);
      throw error;
    }
  }
}
