export const MODELS = {
  humidity: {
    chart: {
      type: 'donut',
      height: 350,
    },
    theme: {
      monochrome: {
        enabled: true
      }
    },
  },
  temperature: {
    chart: {
      type: 'bar',
      zoom: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded'
      },
    },
  },

  wind: {
    chart: {
      type: 'radialBar',
      height: 350,
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
  }
}