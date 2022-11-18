import type { RequestAdapter } from "../../infrastructure/RequestAdapter/Request.adapter";

export class GetWeatherForecast {
  constructor(
    private readonly handleResponse: RequestAdapter
  ) { }

  execute(long: string, lat: string) {
    const date = new Date()
    const current = date.toJSON().slice(0, 10).replace(/-/g, '-')
    const next = new Date(date.setDate(date.getDate() + 7))

    return this.handleResponse.getWeatherForecast({ long, lat })
  }
}