import type { RequestAdapter } from "../../infrastructure/RequestAdapter/Request.adapter";

export class GetWeatherForecast {
  constructor(
    private readonly handleResponse: RequestAdapter
  ) { }

  execute() {
    return this.handleResponse.getWeatherForecast()
  }
}