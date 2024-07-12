import React, { useRef,useState } from 'react'
import Card from './Card'

const FormRef = () => {
    const submitbyuseRef=useRef('')
    const submit=(e)=>{
        e.preventDefault();
      console.log('hi');
      submitbyuseRef.current='form submitted';
      console.log(submitbyuseRef);
      setval(true)
    }
  const [val,setval]=useState(false);
  return (
    <div>
        {/* {val && <div><Card/></div>} */}
        <form id='info-form'>
     <input id='full_name' type='text' placeholder='Full Name' required /><br/>
     <input id='email'  placeholder='Email' type='email' required /><br/>
     <input id='password'  placeholder='Password' type='password' required /><br/>
     <input id='password_confirmation'  placeholder='Confirm Password' type='password' required /><br/>
     <button onClick={submit}>Submit</button>
    </form>
       {/* <Card submit={submit}  />  */}
       <div>{submitbyuseRef.current}</div>
    </div>
  )
}

export default FormRef