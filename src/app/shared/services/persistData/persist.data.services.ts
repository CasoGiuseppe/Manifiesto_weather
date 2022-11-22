
export class PersistService {
  constructor(private readonly store: any) { }

  save({ action, params }: { action: string, params: Record<string, any> }): void {
    this.store[action](params)
  }

  getFromData({ getter }: { getter: string }): any {
    return this.store[getter]
  }
}