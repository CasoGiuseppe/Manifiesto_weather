const SHARED_CHART = {
  foreColor: '#fff',
  zoom: {
    enabled: false
  }
}

export const MODELS = {
  humidity: {
    heading: 'Min/max humidity',
    class: null,
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
  temperature: {
    heading: 'Temperature',
    class: 'x2',
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
  },

  wind: {
    heading: 'Max wind speed',
    class: null,
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
    heading: 'Cloud cover',
    class: null,
    chart: {
      type: 'pie',
      ...SHARED_CHART
    }
  }
}