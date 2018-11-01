import React, { Component } from 'react';
import { Drawer, List, NavBar, Icon, Grid } from 'antd-mobile';
import { Link, routerRedux } from 'dva/router';
import { connect } from 'dva';
import CTYPE from "../common/CTYPE";
class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }
  
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  link = (path) => {
    console.log(this.props)
    const { dispatch } = this.props;
    dispatch(routerRedux.push({
      pathname: path,
      })
    );
  }
  render(){
    // fix in codepen
    const sidebar = (<List>
      {CTYPE.routes.map((i, index) => {

        return (<List.Item key={index}
        ><Link to={i.path} style={{color:'rgba(0, 0, 0, 0.65)'}}><Icon size='xxs' type={i.icon} style={{marginRight:10}} />{i.name}</Link></List.Item>);
      })}
    </List>);
    const griddata = CTYPE.routes.map(item => ({
      icon: (<Icon type={item.icon} />),
      text: item.name,
      path: item.path,
    }));
    return (
    <div>
       <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>首页</NavBar>
      <Drawer
        style={{ position:'static' }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', position:'static' }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
        <Grid data={griddata} columnNum={4} hasLine={true} activeStyle={true} onClick={(e)=>{this.link(e.path)}}/>
      </Drawer>
    </div>
  );
  }
  
}

export default connect()(Index);
