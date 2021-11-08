
import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const LineChart = ({ coin }) => {
  
  return (
    <div style={{ height: '600px' }}>
       
      <TradingViewWidget 
        symbol={`${coin}USDT`}
        theme={Themes.DARK}
        interval="D"
        locale="en"
        autosize
        allow_symbol_change={true}
        timezone= "exchange"
        withDateRanges={true}
        calendar={true}
        hotlist={true}
        enable_publishing={true}
        studies={true}
        hide_side_toolbar={false}
        details
        news={['headlines']}/>
    </div>
  );
};

export default LineChart;
