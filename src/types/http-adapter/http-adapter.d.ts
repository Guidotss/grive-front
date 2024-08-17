export interface HttpAdapter {
  post<T>(
    url: string,
    body: any,
    headers: Record<string, string>,
    timeout: number
  ): Promise<T>;
  get<T>(
    url: string,
    headers: Record<string, string>,
    timeout: number
  ): Promise<T>;
}
