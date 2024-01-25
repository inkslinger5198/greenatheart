import React from 'react';
import './donate.css';
import {useState} from 'react';

const Donate = () => {
  const [amount, setamount] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      if(amount === ''){
        alert('please enter the amount');
      }else{
        var options = {
          key : 'rzp_test_pByDBEHYG6aZiG',
          key_secret : 'RkU6LKv58cuXM37emkWtuKvI',
          amount: amount *100,
          currency: 'INR',
          name: 'Startup_Project',
          description: 'for testing purpose',
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name: 'Pulkita',
            email: "pulkitarajain14@gmail.com",
            contact: '9812007935'
          },
          notes: {
            address: 'Razorpay corporate office'
          },
          theme: {
            colore: "#3399cc"
          }
  
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
    }
  return (
    <div>
       <h1>Razorpay payment gateway</h1>
      <br/>
      <br/>
      <input type="text" placeholder="enter amount" value={amount} onChange={(e) => setamount(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
      
    </div>
  )
}

export default Donate
