import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';


// function App() {
//   return (
//     <div className={styles.app}>
//       <div className={styles.appHeader}>
//         <img src={logo} alt="logo" className={styles.appLogo} />
//         <h1>罗伯特机器人</h1>
//       </div>
//       <ShoppingCart />
//       <div className={styles.robotList}>
//         {robots.map( r => <Robot id={r.id} email={r.email} name={r.name} />)}
//       </div>
//     </div>
//   );
// }

// 将函数组件修改为类组件
interface Props {

}

interface State {
  robotGallery: any[]; // 后端返回的数据类型具有不确定性，因此使用 any 类型
  count: number
}
class App extends React.Component <Props, State> {
  constructor (props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0
    }
  }

  // react 声明周期
  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ robotGallery: data }))
  }

  render () {
   return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>罗伯特机器人</h1>
      </div>
      {/* setState 为异步更新，同步执行。 */}

      <button onClick={() => {
        this.setState({
          count: this.state.count + 1
        })
        console.log("count:", this.state.count)
      }}>
        Click
      </button>

      {/* 
        setState 可以传两个回调函数，
        第一个回调函数接收两个参数，第一个参数为上一个声明周期的state，第二个参数为上一个生命周期的props 
        第二个回调函数可以获取到setState执行完更新之后的数据
      */}

      {/* <button onClick={() => {
        this.setState((preState, preProps) => {
          return { count: preState.count + 1}
        }, () => {
          console.log("count:", this.state.count)
        })
        this.setState((preState, preProps) => {
          return { count: preState.count + 1}
        }, () => {
          console.log("count1:", this.state.count)
        })
        this.setState({count: this.state.count + 1}, () => {
          console.log("count2:", this.state.count)
        })
      }}>
        Click
      </button> */}
      
      <span>count: {this.state.count}</span>
      <ShoppingCart />
      <div className={styles.robotList}>
        {this.state.robotGallery.map( r => <Robot id={r.id} email={r.email} name={r.name} />)}
      </div>
    </div>
   )
  }
}

export default App;
