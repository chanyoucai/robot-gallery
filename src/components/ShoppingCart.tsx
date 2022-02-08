import React from 'react';
import styles from './ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'

interface Props {

}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e.target ", e.target)
    console.log("e.currentTarget ", e.currentTarget)
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        {/* 给 onClick 的箭头函数传递一个 e 为参数，将鼠标置于 e 上，即可得到 e 的参数类型，复制到 handleClick 函数的参数中定义 */}
        <button 
          className={styles.button} 
          onClick={(e) => this.handleClick(e)}>
            <FiShoppingCart />
            <span>购物车 2 （件）</span>
        </button>
        {/* style 行内样式 */}
        <div className={styles.cartDropDown} style={{display: this.state.isOpen ? 'block' : 'none'}}>
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ShoppingCart;