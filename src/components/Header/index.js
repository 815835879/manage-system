import React from 'react'
import { Row, Col } from 'antd'
import './index.less'

export default class Header extends React.Component {
  state = {
    userName: 'eric',
    sysTime: '2019-12-4 16:05',
    dayPictureUrl: '',
    weather: '晴转多云'
  }
  render() {
    return(
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt="" />
            </span>
            <span className="weather-detail">
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}