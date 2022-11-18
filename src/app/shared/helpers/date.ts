export const setDateFormat = ({ date, symbol = '-' }: { date: Date, symbol?: string }): string => {
  return date.toJSON().slice(0, 10).replace(/-/g, symbol)
}


export const getForecastDays = ({ next }: { next: number }): Date => {
  const current = new Date
  return new Date(current.setDate(current.getDate() + next))
}

export const getTimeFromDate = ({ date, format = 'en-US' }: { date: Date, format?: string }): string => {
  return date.toLocaleTimeString(format, { hour12: false })
}