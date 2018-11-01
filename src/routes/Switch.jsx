import React, { Component } from 'react';
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';
class SwitchC extends Component{
  
  render(){
    const { getFieldProps } = this.props.form;
    return(
      <List
      renderHeader={() => 'Form switch'}
    >
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch1', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked); }}
        />}
      >On</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch2', {
            initialValue: false,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked); }}
        />}
      >Off</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch3', {
            initialValue: false,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked); }}
          disabled
        />}
      >Disabled off</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch4', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked); }}
          disabled
        />}
      >Disabled on</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch5', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          platform="android"
        />}
      >Style for Android</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch6', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          platform="android"
          color="red"
        />}
      >Color for Android</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch7', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          platform="ios"
        />}
      >Style for iOS</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch8', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          platform="ios"
          color="red"
        />}
      >Color for iOS</List.Item>
    </List>
    )
  }
}
const SwitchCWrapper = createForm()(SwitchC);
export default SwitchCWrapper;