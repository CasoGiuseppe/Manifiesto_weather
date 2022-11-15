export class HTTPService {
  async get<T>(url: string, params: Record<string, any>): Promise<T> {
    const response = await fetch(`${url}?${new URLSearchParams(params)}`);
    return await response.json();
  }
}
