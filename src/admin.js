import React from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
export default class Admin extends React.Component {
  render() {
    return (
      <Row>
        <Col span="4">
          left
        </Col>
        <Col span="20">
          <Header />
          <Row>
            content
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}