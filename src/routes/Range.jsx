import React, { Component } from 'react';
/* eslint arrow-body-style: 0 */
import { Range, WingBlank, WhiteSpace } from 'antd-mobile';
class RangeC extends Component{
  log = (name) => {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  };
  render(){
    return(
      <div className="am-slider-example">
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <p className="sub-title">Basic range</p>
        <Range
          style={{ marginLeft: 30, marginRight: 30 }}
          min={0}
          max={20}
          defaultValue={[3, 10]}
          onChange={this.log('change')}
          onAfterChange={this.log('afterChange')}
        />
      </WingBlank>
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <p className="sub-title">Disabled range</p>
        <Range
          style={{ marginLeft: 30, marginRight: 30 }}
          min={0}
          max={20}
          defaultValue={[3, 10]}
          onChange={this.log('change')}
          onAfterChange={this.log('afterChange')}
          disabled
        />
      </WingBlank>
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <p className="sub-title">Range with customized style</p>
        <Range
          style={{ marginLeft: 30, marginRight: 30 }}
          min={0}
          max={20}
          defaultValue={[3, 10]}
          onChange={this.log('change')}
          onAfterChange={this.log('afterChange')}
          trackStyle={[{ backgroundColor: 'red' }, { backgroundColor: 'green' }]}
          handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}
          railStyle={{ backgroundColor: 'black' }}
        />
      </WingBlank>
    </div>
    )
  }
}
export default RangeC;