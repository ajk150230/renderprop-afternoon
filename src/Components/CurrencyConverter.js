import React, { Component } from 'react'

export default class CurrencyConverter extends Component {
    state={
        chosen: false,
        selected: 'Select a Currency',
        amount: 0
    }
    handleIncrease = () => {
		this.setState((prevState) => {
			return {
				amount: prevState.amount + 1
			}
		})
	}
    handleDecrease = () => {
		this.setState((prevState) => {
			return {
				amount: prevState.amount - 1
			}
		})
    }
    handleSelect = (e) => {
        const inp = e.target.value
        this.setState(()=>{
            return {
                selected: inp,
                chosen: inp === 'Select a Currency' ? false : true
            }
        })
    }
    render() {

        const currencyData = [
            { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
			{ name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
			{ name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
			{ name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
			{ name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
        ]
        const options = currencyData.map((element, index) =>(
			<option key={element.id} value={index}>
				{element.name}
			</option>
        ))
        return (
            <div>
                <select value={this.state.selected} onChange={this.handleSelect}>
                    <option value='Select a Currency'>Select a Currency</option>
                    {options}
                </select>
                <div>
                    <button onClick={this.handleIncrease} className='add'>+</button>
                    <button onClick={this.handleDecrease} className='minus'>-</button>
                </div>
                {console.log(this.state.chosen)}
				{this.state.chosen ? (
					this.props.render(
						currencyData[this.state.selected],
						this.state.amount
					)
				) : (
					<p>Please Select a Currency</p>
				)} 
            </div>
        )
    }
}
