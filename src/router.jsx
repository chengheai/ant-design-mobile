import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Index from "../src/routes/Index";
import WingBlank from "../src/routes/WingBlank";
import Flex from "../src/routes/Flex";
import WhiteSpace from "../src/routes/WhiteSpace";
import Accordion from "../src/routes/Accordion";
import ActionSheet from "../src/routes/ActionSheet";
import ActivityIndicator from "../src/routes/ActivityIndicator";
import Badge from "../src/routes/Badge";
import Button from "../src/routes/Button";
import Calendar from "../src/routes/Calendar";
import Card from "../src/routes/Card";
import Carousel from "../src/routes/Carousel";
import Checkbox from "../src/routes/Checkbox";
import DatePicker from "../src/routes/DatePicker";
import DatePickerView from "../src/routes/DatePickerView";
import Grid from "../src/routes/Grid";
import Icon from "../src/routes/Icon";
import ImagePicker from "../src/routes/ImagePicker";
import InputItem from "../src/routes/InputItem";
import List from "../src/routes/List";
import ListView from "../src/routes/ListView";
import LocaleProvider from "../src/routes/LocaleProvider";
import Menu from "../src/routes/Menu";
import Modal from "../src/routes/Modal";
import NavBar from "../src/routes/NavBar";
import NoticeBar from "../src/routes/NoticeBar";
import Pagination from "../src/routes/Pagination";
import Picker from "../src/routes/Picker";
import PickerView from "../src/routes/PickerView";
import Progress from "../src/routes/Progress";
import Popover from "../src/routes/Popover";
import PullToRefresh from "../src/routes/PullToRefresh";
import Radio from "../src/routes/Radio";
import Range from "../src/routes/Range";
import Result from "../src/routes/Result";
import SearchBar from "../src/routes/SearchBar";
import SegmentedControl from "../src/routes/SegmentedControl";
import Slider from "../src/routes/Slider";
import Stepper from "../src/routes/Stepper";
import Steps from "../src/routes/Steps";
import SwipeAction from "../src/routes/SwipeAction";
import Switch1 from "../src/routes/Switch";
import TabBar from "../src/routes/TabBar";
import Tabs from "../src/routes/Tabs";
import Tag from "../src/routes/Tag";
import TextareaItem from "../src/routes/TextareaItem";
import Toast from "../src/routes/Toast";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/wingblack" component={WingBlank} />
        <Route exact path="/icon" component={Icon} />
        <Route exact path="/grid" component={Grid} />
        <Route exact path="/datepickerview" component={DatePickerView} />
        <Route exact path="/datepicker" component={DatePicker} />
        <Route exact path="/checkbox" component={Checkbox} />
        <Route exact path="/carousel" component={Carousel} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/button" component={Button} />
        <Route exact path="/badge" component={Badge} />
        <Route exact path="/activityindicator" component={ActivityIndicator} />
        <Route exact path="/actionsheet" component={ActionSheet} />
        <Route exact path="/accordion" component={Accordion} />
        <Route exact path="/whiteSpace" component={WhiteSpace} />
        <Route exact path="/flex" component={Flex} />
        <Route exact path="/toast" component={Toast} />
        <Route exact path="/textareaItem" component={TextareaItem} />
        <Route exact path="/tag" component={Tag} />
        <Route exact path="/tabs" component={Tabs} />
        <Route exact path="/tabBar" component={TabBar} />
        <Route exact path="/switch" component={Switch1} />
        <Route exact path="/swipeaction" component={SwipeAction} />
        <Route exact path="/steps" component={Steps} />
        <Route exact path="/stepper" component={Stepper} />
        <Route exact path="/slider" component={Slider} />
        <Route exact path="/segmentedcontrol" component={SegmentedControl} />
        <Route exact path="/searchbar" component={SearchBar} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/range" component={Range} />
        <Route exact path="/radio" component={Radio} />
        <Route exact path="/pullTorefresh" component={PullToRefresh} />
        <Route exact path="/popover" component={Popover} />
        <Route exact path="/progress" component={Progress} />
        <Route exact path="/picker" component={Picker} />
        <Route exact path="/pagination" component={Pagination} />
        <Route exact path="/noticebar" component={NoticeBar} />
        <Route exact path="/pickerView" component={PickerView} />
        <Route exact path="/navBar" component={NavBar} />
        <Route exact path="/modal" component={Modal} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/localeProvider" component={LocaleProvider} />
        <Route exact path="/listView" component={ListView} />
        <Route exact path="/list" component={List} />
        <Route exact path="/inputItem" component={InputItem} />
        <Route exact path="/imagePicker" component={ImagePicker} />
      </Switch>
    </Router>
  )
}


export default RouterConfig;
