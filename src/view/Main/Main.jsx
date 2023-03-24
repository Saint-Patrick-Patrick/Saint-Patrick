import React from 'react'
import Buttons from './components/Buttons/Buttons'
import Wallet from './components/Wallet/Wallet'
import History from './components/History/History'
import Frecuents from './components/Frecuents/Frecuents'

export default function Main() {
  return (
    <div>
      <Wallet></Wallet>
      <History></History>
      <Frecuents></Frecuents>
      <Buttons></Buttons>
    </div>
  )
}
