import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
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