export type SharedType = {
  foreColor?: string,
  fontSize?: string,
  color?: string,
  zoom?: Record<string, boolean>,
}

export type SharedRadialType = {
  dataLabels: SharedNameType
}

export type SharedNameType = {
  name: SharedType
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

const SHARED_RADIAL: SharedRadialType = {
  dataLabels: {
    name: {
      fontSize: '12px',
      color: '#fff'
    },
  }
}

export const MODELS: Models = {
  humidity: {
    heading: 'Min/max humidity',
    direction: 'COLUMN',
    class: 't__center',
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
    direction: 'COLUMN',
    class: 't__right',
    chart: {
      type: 'radialBar',
      ...SHARED_CHART
    },
    plotOptions: {
      radialBar: SHARED_RADIAL
    }
  },

  cloud: {
    heading: 'Max/min cloud cover',
    direction: 'COLUMN',
    class: 'c__left-top',
    chart: {
      type: 'pie',
      ...SHARED_CHART
    }
  },

  precipitation: {
    heading: 'Max precipitation',
    direction: 'COLUMN',
    class: 'c__left-bottom',
    chart: {
      type: 'radialBar',
      ...SHARED_CHART
    },
    plotOptions: {
      radialBar: SHARED_RADIAL
    }
  },

  temperature: {
    heading: 'Temperature',
    class: 'b',
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