import navlogo from './Assets/Brand Logo.png';
import React, { useRef, Component }  from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import Tab from './Components/AllTabs/Tabs.js'


function App() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  
  
  const navigate = useNavigate();

  const userCredential = [{username:'James',password:'James123'},{username:'Admin',password:'Admin123'}]

  const navigateHome = () => {
    return (
      <div className="home-content">
        <div className='home-header'>
          <nav>
            <ul>
              <li><img src={navlogo} className="nav-logo" alt="logo-img"/></li>
              <li>Customer Form</li>
              <li>Table</li>
              <li>User Profile</li>
              <li><Link to="/" className='logout'>Logout</Link></li>
            </ul>
          </nav>  
        </div>
        <div className="page-content">
          <h2>Welcome to the Home Page,<br/> <br/>Here you can manage your transactions.</h2>
          <Tab/>
        </div>
      </div>
      
    )
    
  };
  
  const navigateLogin = () => {
    // 👇️ navigate to /
    navigate('/login');

    return (
      <div className="outer">
          <div className="middle">
            <div className="inner">
              <div className="row">
                <div className="col-12">
                  <div className="login-component">
                    <h1>Login Page</h1>
                    <form id="login-form">
                      <div className="form-group">
                        {/* <label>Username</label> */}
                        <input type="text"  id="username" ref={inputRef1} placeholder="Username" name="username"/>
                      </div>
                      <div className="form-group">
                        {/* <label>Password</label> */}
                        <input type="password" id="password" ref={inputRef2} placeholder="Password" name="password"/>
                      </div>
                      <div className="form-group">
                        <button onClick={checkLogin}>Login</button>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  function checkLogin(event){
    event.preventDefault();
    console.log('check login');
    let username = inputRef1.current.value;
    let password = inputRef2.current.value;
    console.log(username,password);
    let isAuthenticated = checkAuthentication(username, password);

    if(isAuthenticated){
      alert('Login success');
      // 👇️ navigate to /
      navigate('/home');
    }else{
      alert('Invalid credentials');
    }

  }

  function checkAuthentication(username, password){
    console.log(userCredential.length);
    for(let i=0;i<userCredential.length;i++){
      if(userCredential[i].username === username && userCredential[i].password === password){
        return true;
      }else{
        return false;
      }
    }
  }

  // const createNewTransaction = ()=>{
  //   return(
  //     <div className='new-transaction-page'>
  //       <form className='newtransactionform'>
  //         <div className='form-group'>
  //           <input type="radio"  ref={inputRef3} placeholder="Customer number" name="customerType"/>
  //           <label>New Customer</label>
  //           <input type="radio"  ref={inputRef3} placeholder="Customer number" name="customerType"/>
  //           <label>Existing Customer</label>
  //         </div>
  //         <div className='form-group'>
  //           <label>Customer Number</label>
  //           <input type="text"  id="customerNumber" ref={inputRef4} placeholder="" name="customerNumber"/>
  //         </div>
  //         <div className='form-group'>
  //           <label>Customer Name</label>
  //           <input type="text"  id="customerName" ref={inputRef5} placeholder="" name="customerName"/>
  //         </div>
  //         <div className='form-group'>
  //           <label>Customer Address</label>
  //           <input type="text"  id="customerAddress" ref={inputRef6} placeholder="" name="customerAddress"/>
  //         </div>
  //         <div className='form-group'>
  //           <label>Customer Phone Number</label>
  //           <input type="text"  id="customerPhoneNumber" ref={inputRef7} placeholder="" name="customerPhoneNumber"/>
  //         </div>
  //         <div className='form-group'>
  //           <label>Transfer Amount</label>
  //           <input type="number"  id="transferAmount" ref={inputRef8} placeholder="" name="transferAmount"/>
  //         </div>
  //         <div className='form-group'>
  //           <label>Transfer Currency</label>
  //           <input type="text"  id="transferCurrency" ref={inputRef9} placeholder="" name="transferCurrency"/>
  //         </div>
  //         <div className='form-group'>
  //           <label>Beneficiary Bank</label>
  //           <input type="text"  id="beneficiaryBank" ref={inputRef10} placeholder="" name="beneficiaryBank"/>
  //         </div>
  //         <div className='form-group'>
  //           <label>Beneficiary Account Number</label>
  //           <input type="text"  id="beneficiaryAccountNumber" ref={inputRef11} placeholder="" name="beneficiaryAccountNumber"/>
  //         </div>
  //         <div className='form-group'>
  //           <label>Payment Details</label>
  //           <input type="text"  id="paymentdetails" ref={inputRef12} placeholder="" name="paymentdetails"/>
  //         </div>
  //         <div className='form-group'>
  //           <label>Credit/Debit Card Details</label>
  //           <input type="text"  id="paymentdetails" ref={inputRef13} placeholder="" name="paymentdetails"/>
  //         </div>
  //         <div className='form-group'>
  //           <label>Region</label>
  //           <select>
  //             <option selected>Port Louis</option>
  //             <option>Curepipe</option>
  //             <option>Vacoas, Port Mathurin</option>
  //             <option>Port Mathurin</option>
  //           </select>
  //         </div>
  //       </form>
  //     </div>
  //   )
  // }

  return (
    <div className="App">
      <Routes>
          <Route path="/login" Component={navigateLogin} />
          <Route path="/" Component={navigateLogin} />
          <Route path="/home" Component={navigateHome} />
          
      </Routes>
    </div>
  );
}

export default App;
