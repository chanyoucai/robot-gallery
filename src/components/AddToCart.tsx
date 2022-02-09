import React, {useContext} from "react"
import { appSetStateContext } from "../AppState"
import { RobotProps } from "./Robot"

export const withAddToCart = (ChileComponent: React.ComponentType<RobotProps>) => {
  return (props) => {
    const setState = useContext(appSetStateContext)
    const addToCart = (id, name) => {
      console.log('setState:', setState)
      if (setState) {
        setState( (state) => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, {id, name}]
            }
          }
        })
      }
    }
    return <ChileComponent {...props} addToCart={addToCart} />
  }
}

export const useAddToCart = () => {
  const setState = useContext(appSetStateContext)
  const addToCart = (id, name) => {
    console.log('setState:', setState)
    if (setState) {
      setState( (state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, {id, name}]
          }
        }
      })
    }
  }
  return addToCart
}