import React from "react"
import "../styles/form.css"


const Form = () => {

    return (
      <div className='pre'>
        <h1 className='title'>Register</h1>
        <form className="formu">
          <div className='container'>
            <label htmlfor="firstname">First Name</label>
            <input type="text" id="firstName"
            />
            <br />
            <label htmlfor="lastName">Last Name</label>
            <input type="text" id="lastName"
            
            />
            <br />
            <label htmlfor="email">Email</label>
            <input type="email" id="email"
        
            />
            <br />
            <label htmlfor="username">UserName</label>
            <input type="text" id="username"
              
            />
            <br />
            <label htmlfor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber"
              
            />
            <br />
  
            <button type='submit'>Create Acount</button>
          </div>
        </form>
      </div>
    )
  }
  export default Form
  
