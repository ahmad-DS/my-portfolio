import React, { useState } from 'react'
import { Link } from "react-router-dom"

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white',
  letterSpacing: "2px"
};
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    console.log('zsdscs')
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('fcghc')
    console.log(formData)
  }



  return (
    <div style={{ 
      backgroundImage: `url("https://thumbs.dreamstime.com/b/contact-us-banner-laptop-screen-blue-background-250020294.jpg")` 
    }} className='container-contact'>
      <h1>
        Contact Me
      </h1>



      <div className='Big_Div'>


        <div className='icon_div'>

          
          <div>
            <Link   style={linkStyle} to='/'>
            <i class="zmdi zmdi-linkedin-box"> LinkedIn</i>
            </Link>
          </div>
          <div>
          <Link  style={linkStyle}to='/'>
            <i class="zmdi zmdi-github " > GitHub</i>
            </Link>
          </div>
          <div>
            
            <i class="zmdi zmdi-phone" > Contact: +919771843653 </i>
          </div>
          <div>
            <i class="zmdi zmdi-mail-send"> Email: ahmad.shakil444@gmail.com </i>
          </div>

        </div>



        <div className='form_Div'>
          {/* <div className='form_Div2'> */}
            <form className='contact-form  mx-auto' onSubmit={handleSubmit}>

              <input type="text"
                placeholder='Enter Name...'
                value={formData.name}
                onChange={handleChange}
                id="name"
              />
              <br />

              <input type="text"
                placeholder='Enter Email...'
                value={formData.email}
                onChange={handleChange}
                id="email"
              /><br />

              <textarea rows="2"
                placeholder='Write message here...'
                value={formData.message}
                className="message-cntrl"
                onChange={handleChange}
                id="message"
              >

              </textarea><br />

              <button type='submit' className='Submit-btn'>Submit</button>
            </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Contact