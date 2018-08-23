import React, { Component } from 'react';
import { Icon, Grid } from 'antd-mobile';

const list = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'loading',
];
const size = ['xxs', 'xs', 'sm', 'md', 'lg'];
class IconC extends Component{
  data = list.map(item => ({
    icon: (<Icon type={item} />),
    text: item,
  }));
  data2 = size.map(item => ({
    icon: (<Icon type="search" size={item} />),
    text: item,
  }));
  render(){
    return(
      <div>
        <Grid data={this.data} columnNum={3} hasLine={false} activeStyle={false} />
        <div style={{margin:'15px 0'}}>尺寸</div>
        <Grid data={this.data2} columnNum={5} hasLine={false} activeStyle={false} />
      </div>
    )
  }
}
export default IconC;