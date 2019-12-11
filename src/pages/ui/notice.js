import React from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'
export default class Notice extends React.Component {
  openNotification = (type, direction) => {
    if(direction) {
      notification.config({
        placement: direction
      })
    }
    notification[type]({
      message:'发工资了',
      description:'上个月考勤22天，迟到12天，实发工资250，请笑纳'
    });
  }
  render() {
    return(
      <div className="">
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success')}>Open</Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.openNotification('warning')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() => this.openNotification('error')}>水平垂直居中</Button>
        </Card>
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success','topLeft')}>confirm</Button>
          <Button type="primary" onClick={() => this.openNotification('info','topRight')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotification('warning','bottomLeft')}>Success</Button>
          <Button type="primary" onClick={() => this.openNotification('error','bottomRight')}>Warning</Button>
        </Card>
      </div>
    )
  }
}