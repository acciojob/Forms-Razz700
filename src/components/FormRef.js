import React, { useRef,useState } from 'react'
import Card from './Card'

const FormRef = () => {
    const submitbyuseRef=useRef('')
    const submit=()=>{
      console.log('hi');
      submitbyuseRef.current='form submitted';
      console.log(submitbyuseRef);
      setval(true)
    }
   const [val,setval]=useState(false);
  return (
    <div>
        <Card submit={submit}  />
      {val &&  <p id='full_name'>I am full name</p>}
    </div>
  )
}

export default FormRef