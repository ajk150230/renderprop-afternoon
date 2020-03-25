
import React from 'react'

const CurrencyDisplay = (props) => {
    console.log(props)
return(
	<>
		US Dollar ${props.amount.toFixed(2)} - {props.currencyData.name}{' '}
		{props.currencyData.symbol}
		{(props.amount * props.currencyData.rate).toFixed(2)}
	</>
)}

export default CurrencyDisplay