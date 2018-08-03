//父子组件间的通信

import React from 'react'
import ReactDOM from 'react-dom'

// 子组件
class ToggleButton extends Component {
    render() {
      // 从【父组件】获取的值
      var checked = this.props.checked,
          text = this.props.text;
      return (
          <label>{text}: <input type="checkbox" checked={checked} /></label>
      );
    }
}
// 父组件
class MyContainer extends Component {
    getInitialState() {
      return {
        checked: true
      };
    }
    render() {
      return (
        <ToggleButton text="Toggle me" checked={this.state.checked} />
      )
    }
}

// ReactDOM.render(
//     <MyContainer />,
//     document.getElementById('test')
// )

export default MyContainer;