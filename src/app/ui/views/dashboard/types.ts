export const MODELS = {
  humidity: {
    heading: 'Min/max humidity',
    class: null,
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
    heading: 'Temperature',
    class: null,
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
    heading: 'Max wind speed',
    class: null,
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
  },

  cloud: {
    heading: 'Cloud cover',
    class: null,
    chart: {
      type: 'pie',
      width: 380,
    }
  }
}