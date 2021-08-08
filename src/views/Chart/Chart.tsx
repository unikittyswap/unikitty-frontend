import React from 'react'
import IFrame from 'views/Trade'
import FullPage from './components/FullPage'

const Chart: React.FC = () => {
  return (
    <FullPage>
      <IFrame
        title="chart"
        url="https://goswappcharts.web.app/?isbsc=true&tokenId=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
      />
    </FullPage>
  )
}

export default Chart