import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

class GridC extends Component{
  render(){
    return(
      <div>
    <div className="sub-title">Always square grid item </div>
    <Grid data={data} activeStyle={false} />
  </div>
    )
  }
}
export default GridC;