import React, { useRef } from 'react'
import Card from './Card'

const FormRef = () => {
    const submitbyuseRef=useRef('')
    const submit=()=>{
      console.log('hi');
      submitbyuseRef.current='form submitted';
      console.log(submitbyuseRef);
    }
  return (
    <div>
         <input id='full_name' type='text' placeholder='Full Name' required /><br/>
        <Card submit={submit} />
    </div>
  )
}

export default FormRef