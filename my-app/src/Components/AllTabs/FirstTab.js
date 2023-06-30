// FirstTab.js

import React, { Component }  from 'react';



class NewTransactionForm extends Component{
    
    constructor(){
        super()
    
        this.handleTransactionSubmit = this.handleTransactionSubmit.bind(this)
        this.onChangeCustomerType = this.onChangeCustomerType.bind(this)
    
    
        this.state = {value : 'existing'};
    }
    
    
    onChangeCustomerType(e){
        this.setState({value : e.target.value})
    }
    
    handleTransactionSubmit(e){
        alert("form submitted " + this.state.value)
        e.preventDefault();
    }
    
      render(){
    
        return (
            <div className='new-transaction-page'>
                <form className='newtransactionform' onSubmit = {this.handleTransactionSubmit}>
                <div className='form-group radio'>
                    <input type="radio" checked = {this.state.value === 'existing'} onChange={this.onChangeCustomerType} value="existing" name="customerType"/>
                    <label>Existing Customer</label>
                    <input type="radio" checked = {this.state.value === 'new'} onChange={this.onChangeCustomerType} value="new"  name="customerType"/>
                    <label>New Customer</label>
                </div>
                <div className='form-group'>
                    <label>Customer Number</label>
                    <input type="text"  id="customerNumber"  placeholder="" name="customerNumber"/>
                </div>
                <div className='form-group'>
                    <label>Customer Name</label>
                    <input type="text"  id="customerName"  placeholder="" name="customerName"/>
                </div>
                <div className='form-group'>
                    <label>Customer Address</label>
                    <input type="text"  id="customerAddress" placeholder="" name="customerAddress"/>
                </div>
                <div className='form-group'>
                    <label>Customer Phone Number</label>
                    <input type="text"  id="customerPhoneNumber"  placeholder="" name="customerPhoneNumber"/>
                </div>
                <div className='form-group'>
                    <label>Transfer Amount</label>
                    <input type="number"  id="transferAmount"  placeholder="" name="transferAmount"/>
                </div>
                <div className='form-group'>
                    <label>Transfer Currency</label>
                    <input type="text"  id="transferCurrency"  placeholder="" name="transferCurrency"/>
                </div>
                <div className='form-group'>
                    <label>Beneficiary Bank</label>
                    <input type="text"  id="beneficiaryBank" placeholder="" name="beneficiaryBank"/>
                </div>
                <div className='form-group'>
                    <label>Beneficiary Account Number</label>
                    <input type="text"  id="beneficiaryAccountNumber" placeholder="" name="beneficiaryAccountNumber"/>
                </div>
                <div className='form-group'>
                    <label>Payment Details</label>
                    <input type="text"  id="paymentdetails" placeholder="" name="paymentdetails"/>
                </div>
                <div className='form-group'>
                    <label>Credit/Debit Card Details</label>
                    <input type="text"  id="paymentdetails" placeholder="" name="paymentdetails"/>
                </div>
                <div className='form-group'>
                    <label>Region</label>
                    <select >
                        <option defaultValue>Port Louis</option>
                        <option>Curepipe</option>
                        <option>Vacoas, Port Mathurin</option>
                        <option>Port Mathurin</option>
                    </select>
                </div>
                <div className='form-group'>
                    <button type="submit">Submit</button>
                </div>
                </form>
            </div>
        );
    }
    
    
}

export default NewTransactionForm;