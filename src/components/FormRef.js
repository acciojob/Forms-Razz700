import React, { useRef,useState } from 'react'
import Card from './Card'

const FormRef = () => {
    const submitbyuseRef=useRef('')
    const submit=()=>{
      console.log('hi');
      submitbyuseRef.current='form submitted';
      console.log(submitbyuseRef);
      setval('');
    }
    const [val,setval]=useState('');
const settt=(e)=>{
    const j=e.target.value;
    setval(j);
}
  return (
    <div>
        <Card submit={submit} settt={settt} val={val} />
    </div>
  )
}

export default FormRef