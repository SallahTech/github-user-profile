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
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

//Adding the charts and theme as dependecies to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

// STEP 2 - CREATING THE JSON OBJECT TO STORE THE CHART COMFIG

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'pie3d', // the chart type
    width: '100%', //width of the chart
    height: '400', // height of the chart
    dataFormats: 'json', //data type
    dataSource: {
      //charts configuration
      Chart: {
        //set the chart caption
        caption: 'Languages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '45%',
      },
      // chart data
      data,
    },
  }

  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
