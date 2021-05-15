//step 1 - include dependecies
//include react
import React from 'react'

//include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

//include the chart fusionchart library
import FusionCharts from 'fusioncharts'

//inlcude the chart type
import Chart from 'fusioncharts/fusioncharts.charts'

//include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

//Adding the charts and theme as dependecies to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

// STEP 2 - CREATING THE JSON OBJECT TO STORE THE CHART COMFIG

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d', // the chart type
    width: '100%', //width of the chart
    height: '400', // height of the chart
    dataFormats: 'json', //data type
    dataSource: {
      //charts configuration
      Chart: {
        //set the chart caption
        caption: 'Stars Per Language',
        theme: 'candy',
        decimals: 0,
        doughnutRadius: '45%',
        showPercentValues: 0,
      },
      // chart data
      data,
    },
  }

  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
