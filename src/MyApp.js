//React router 的练习

import React from 'react'
import './MyApp.css';
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
      <div className= "nav_Left ">
          <ul>
              {/* <li><Link to="/">HOME</Link></li> */}
              <li className= "rule"><Link to="/CodeRule">编码规范</Link><i className="fr">></i></li>
              <li><Link to="/SQLRule">SQL规范</Link></li>
              <li><Link to="/Java_dev">Java基础开发规范</Link></li>
              <li><Link to="/Java_back">Java后端服务开发规范</Link></li>
              <li><Link to="/RestAPI">Rest API规范</Link></li>
              <li><Link to="/topics">前端服务开发规范</Link></li>
              <li><Link to="/topics">Git提交规范</Link></li>
              <li><Link to="/topics">Gitlab CI规范</Link></li>
          </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/Doc" component={Doc}/>
        <Route path="/EveryDay" component={EveryDay}/>

        <Route path="/CodeRule" component={CodeRule}/>        
        <Route path="/SQLRule" component={SQLRule}/>
        <Route path="/Java_dev" component={Java_dev}/>
        <Route path="/Java_back" component={Java_back}/>
        <Route path="/RestAPI" component={RestAPI}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </div>
  </Router>
)

const Home = () => (
  <div className="content">
    <h2>首 页</h2>
  </div>
)
const Doc = () => (
  <div  className="content">
    <h2>文档</h2>
  </div>
)
const EveryDay = () => (
  <div className="content">
    <h2>每日总结</h2>
  </div>
)

const CodeRule = () => (
  <div className="content">
    <h2>编码规范</h2>
  </div>
)
const SQLRule = () => (
  <div className="content">
    <h2>sql</h2>
  </div>
)

const Java_dev = () => (
    <div className="content">
        <h2>Java_dev</h2>
    </div>
)

const Java_back = () => (
  <div className="content">
      <h2>Java_back</h2>
  </div>
)

const RestAPI = () => (
    <div className="content">
        <h2>RestAPI</h2>
    </div>
)

const Topics = ({ match }) => (
  <div className="content">
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample