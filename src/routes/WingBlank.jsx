import React, { Component } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);
class WingBlankC extends Component{
  render(){
    return(
      <div style={{ padding: '15px 0' }}>
    <WingBlank><PlaceHolder /></WingBlank>

    <WhiteSpace size="lg" />
    <WingBlank size="md"><PlaceHolder /></WingBlank>

    <WhiteSpace size="lg" />
    <WingBlank size="sm"><PlaceHolder /></WingBlank>
  </div>
    )
  }
}
export default WingBlankC;