import React, { useRef,useState } from 'react'
import Card from './Card'

const FormRef = () => {
    const submitbyuseRef=useRef('')
    const submit=(e)=>{
        e.preventDefault();
      console.log('hi');
      submitbyuseRef.current='form submitted';
      console.log(submitbyuseRef);
    //  setval(true)
    }
 //  const [val,setval]=useState(false);
  return (
    <div>
        {/* {val && <div id='full_name'><Card /></div>} */}
        <Card submit={submit}  />
    </div>
  )
}

export default FormRef