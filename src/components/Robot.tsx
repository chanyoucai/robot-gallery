import React, { useContext } from 'react';
import styles from './Robot.module.css'
import { appContext, appSetStateContext } from '../AppState'

interface RobotProps {
  id: number,
  name: string,
  email: string
}

// Context 写法
// const Robot : React.FC<RobotProps> = ({id, name, email}) => {
//   return (
//     <appContext.Consumer>
//       {(value) => (
//         <div className={styles.cardContainer}>
//           <img alt='robot' src={`https://robohash.org/${id}`} />
//           <h2>{name}</h2>
//           <p>{email}</p>
//           <p>作者：{value.username}</p>
//         </div>
//       )}
//     </appContext.Consumer>
//   )
// }

// useContext 写法
const Robot : React.FC<RobotProps> = ({id, name, email}) => {
  const value = useContext(appContext)
  const setState = useContext(appSetStateContext)

  const addToCart = () => {
    console.log('setState:', setState)
    if (setState) {
      setState( state => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, {id, name}]
          }
        }
      })
    }
  }

  return (
    <div className={styles.cardContainer}>
      <img alt='robot' src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  )
}

export default Robot;
