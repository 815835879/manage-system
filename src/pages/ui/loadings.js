// import React from 'react'
// import { Card, Button, Spin, Icon, Alert } from 'antd'
// import './ui.less'
// export default class Loadings extends React.Component {
//   render() {
//     const icon = <Icon type="loading" style={{fontSize: 24}} />
//     return(
//       <div className="">
//         <Card title="spin集合" className="card-wrap">
//           <Spin size="small" />
//           <Spin style={{margin: '0 10px'}} />
//           <Spin size="large" />
//           <Spin indicator={icon} style={{marginLeft: 10}} spinning={true} />
//         </Card>
//         <Card title="内容遮罩" className="card-wrap">
//           <Alert
//             message="react"
//             description="welcome to MS"
//             type="info"
//             style={{marginBottom: 10}}
//           />
//           <Spin>
//             <Alert
//               message="react"
//               description="welcome to MS"
//               type="warning"
//               style={{marginBottom: 10}}
//             />
//           </Spin>
//           <Spin tip="loading...">
//             <Alert
//               message="react"
//               description="welcome to MS"
//               type="warning"
//               style={{marginBottom: 10}}
//             />
//           </Spin>
//           <Spin indicator={icon}>
//             <Alert
//               message="react"
//               description="welcome to MS"
//               type="warning"
//               style={{marginBottom: 10}}
//             />
//           </Spin>
//         </Card>
//       </div>
//     )
//   }
// }