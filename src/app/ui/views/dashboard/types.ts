export type SharedType = {
  foreColor: string,
  zoom: Record<string, boolean>
}

export type Models = {
  [key: string]: {
    heading: string,
    direction?: string,
    class: string,
    chart?: Record<string, any>,
    theme?: Record<string, any>,
    plotOptions?: Record<string, any>
  }
}

const SHARED_CHART: SharedType = {
  foreColor: '#fff',
  zoom: {
    enabled: false
  }
}

export const MODELS: Models = {
  humidity: {
    heading: 'Min/max humidity',
    direction: 'COLUMN',
    class: '30',
    chart: {
      type: 'donut',
      ...SHARED_CHART
    },
    theme: {
      monochrome: {
        enabled: true
      }
    },
  },

  wind: {
    heading: 'Max wind speed',
    direction: 'ROW',
    class: '45',
    chart: {
      type: 'radialBar',
      ...SHARED_CHART
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '12px',
            color: '#fff'
          },
        }
      }
    }
  },

  cloud: {
    heading: 'Max/min cloud cover',
    direction: 'COLUMN',
    class: '40',
    chart: {
      type: 'pie',
      ...SHARED_CHART
    }
  },

  temperature: {
    heading: 'Temperature',
    class: '60',
    direction: 'COLUMN',
    chart: {
      type: 'bar',
      ...SHARED_CHART,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        endingShape: 'rounded'
      },
    },
  }
}