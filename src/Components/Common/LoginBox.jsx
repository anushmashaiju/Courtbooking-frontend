import React from 'react'
import {
 
    MDBBtn,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
   
   
  }
  from 'mdb-react-ui-kit';
function LoginBox({setBoxName}) {
  const handleSignUp=()=>{
    setBoxName('signup')
 
  }

  return (
<MDBCol md='6' className='position-relative'>
    
    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <MDBCard className='my-5 bg-glass'>
      <MDBCardBody className='p-5'>

      

        <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
        <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

        <div className='d-flex justify-content-center mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember password' />
        </div>

        <MDBBtn className='w-100 mb-4' size='md'>login</MDBBtn>

        <div className="text-center">

          <p>don't have an account?<span onClick={handleSignUp}> <i> Sign Up</i></span></p>

          
        </div>

      </MDBCardBody>
    </MDBCard>
    </MDBCol> 
  )   

  }
export default LoginBox

