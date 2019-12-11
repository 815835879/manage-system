import React from 'react'
import { Card, Button, Tabs, message, Icon } from 'antd'
import './ui.less'
const TabPane = Tabs.TabPane
export default class MTabs extends React.Component{
  newTabIndex = 0  
  handleCallBack = (key) => {
    message.info("hello, u select page:"+key)
  }

  componentWillMount() {
    const panes = [
      {
          title:'Tab 1',
          content: 'Tab 1',
          key:'1'
      },
      {
          title: 'Tab 2',
          content: 'Tab 2',
          key: '2'
      },
      {
          title: 'Tab 3',
          content: 'Tab 3',
          key: '3'
      }
    ]
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
            lastIndex = i - 1;
        }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }
  render() {
    return (
      <div>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActivekey="1" onChange={this.handleCallBack}>
            <TabPane tab="1" key="1">welcome to MS</TabPane>
            <TabPane tab="2" key="2" disabled>welcome to MS</TabPane>
            <TabPane tab="3" key="3">welcome to MS</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图页签" className="card-wrap">
          <Tabs defaultActivekey="1" onChange={this.handleCallBack}>
            <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">welcome to MS</TabPane>
            <TabPane tab={<span><Icon type="edit" />Tab 1</span>} key="2">welcome to MS</TabPane>
            <TabPane tab={<span><Icon type="delete" />Tab 1</span>} key="3">welcome to MS</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab可增减页签" className="card-wrap">
          <Tabs
            activeKey={this.state.activeKey}
            onChange={this.onChange}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {
              this.state.panes.map((panel) => {
                return <TabPane tab={panel.title} key={panel.key}/>
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}