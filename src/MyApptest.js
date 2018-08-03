//React router 的练习

import React from 'react'
import './MyApptest.css';
import logo from './logo.png';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <div className="topBar">
          <a><Link to="/"><img src={logo} className="App-logo " alt="logo" /></Link></a>
          <div className="fr topBar_right" >
              <ul>
                  <li className="fl"><Link to="/Doc">文档</Link></li>
                  <li className="fl"><Link to="/EveryDay">每日总结</Link></li>
              </ul>
          </div>
        </div>
        
        <Route exact path="/" component={Home}/>
        <Route path="/Doc" component={Doc}/>
        <Route path="/EveryDay" component={EveryDay}/>  
    </div>
  </Router>
)

const Home = () => (
  <div className="first">
    <h2>欢迎来到研发中心培训网站</h2>
  </div>
  
)

// const Doc = () => (
//     <div className="content">
//       <h2>文档</h2>
//     </div> 
// )

// const EveryDay = () => (
//   <div className="content">
//     <h2>每日总结</h2>
//   </div> 
// )

const Doc = ({ match }) => (
  <div className="content">
    {/* <h2>Doc</h2> */}
    <ul>
      <li>
        <Link to={`${match.url}/CodeRule`}>
            编码规范
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/SQLRule`}>
            SQL规范
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Java_dev`}>
            Java基础开发规范
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Java_back`}>
            Java后端服务开发规范
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/RestAPI`}>
            Rest API规范
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/FontRules`}>
            前端服务开发规范
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/GitSubmit`}>
            Git提交规范
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/GitLab`}>
            Gitlab CI规范
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={DocTopic}/>
    <Route exact path={match.url} render={() => (
      <h2 className="text">首 页</h2>
    )}/>
  </div>
)

const DocTopic = ({ match }) => (
  <div className="text">
    <h2>{match.params.topicId}</h2>
  </div>
)

const EveryDay = ({ match }) => (
  <div className="content">
    {/* <h2>Doc</h2> */}
    <ul>
      <li>
        <Link to={`${match.url}/Background_dev`}>
            后端
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Font_dev`}>
            前端
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/MobileCenter`}>
            移动中心
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Advance`}>
            提前批
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/RongJing`}>
            融晶
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/TestCenter`}>
            测试中心
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={EveryDayTopic}/>
    <Route exact path={match.url} render={() => (
      <h2 className="text">首 页</h2>
    )}/>
  </div>
)

const EveryDayTopic = ({ match }) => (
  <div className="text">
    <h2>{match.params.topicId}</h2>
  </div>
)

export default BasicExample