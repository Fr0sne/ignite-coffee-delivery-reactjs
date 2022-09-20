import { createContext, Dispatch, useContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './pages/Home/Home'
import { Header } from './components/header/Header'
import React from 'react';
import { DefaultTheme } from './themes/default'
import { ThemeContext, ThemeProvider } from 'styled-components'
import { cartReducer } from './cart/CartReducer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Checkout } from './pages/Checkout/Checkout'
import { Confirmed } from './pages/Confirmed/Confirmed'
import { FacebookLogo } from 'phosphor-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
interface CoffeeCart {
  id?: string,
  quantity?: number
}
export const CartContext = createContext({
} as {
  state: CoffeeCart[],
  dispatch: any
})

export const OrderInfo = createContext<{
  orderInfo: {
    cep: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    paymentMethod: string
  },
  setOrderInfo: (e: any) => void
}>({
  orderInfo: {
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    paymentMethod: ''
  },
  setOrderInfo: () => null
} as any)
function App() {
  const [state, dispatch] = useReducer(cartReducer as any, []);
  const [orderInfo, setOrderInfo] = useState({} as any)
  return (
    <>
      <OrderInfo.Provider value={{ orderInfo, setOrderInfo }}>
        <ToastContainer />
        <CartContext.Provider value={{ state: state as any, dispatch }} >
          <Header />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Checkout />} path="/checkout" />
            <Route element={<Confirmed />} path="/confirmed" />
          </Routes>
        </CartContext.Provider>
      </OrderInfo.Provider>
    </>
  )
}

export default App
