// import React, { useRef,useState } from 'react'
// //import Card from './Card'

// const FormRef = () => {
//     const submitbyuseRef=useRef('')
//     const submit=(e)=>{
//         e.preventDefault();
//       console.log('hi');
//       submitbyuseRef.current='form submitted';
//       console.log(submitbyuseRef);
//       setval(true)
//     }
//   const [val,setval]=useState(false);
//   return (
//     <div>
//         {/* {val && <div>
//             <form>
//                 <input type='text' value={full_name} name='full_name' id="#full_name"/>
//             </form></div>} */}
//         <form id='info-form'>
//      <input id='full_name' type='text' placeholder='Full Name' required /><br/>
//      <input id='email'  placeholder='Email' type='email' required /><br/>
//      <input id='password'  placeholder='Password' type='password' required /><br/>
//      <input id='password_confirmation'  placeholder='Confirm Password' type='password' required /><br/>
//      <button type='submit'>Submit</button>
//     </form>
//        {/* <Card submit={submit}  />  */}
//        {/* <div>{submitbyuseRef.current}</div> */}
//     </div>
//   )
// }

// export default FormRef
import React, { useRef, useState } from 'react'

const FormRef = () => {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const submit=(e)=>{
        e.preventDefault();
        console.log('Form data:', {
            fullName: fullNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value
        });
        // Clear the input fields
        fullNameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
        confirmPasswordRef.current.value = '';
    }

    return (
        <div>
            <form id='info-form' onSubmit={submit}>
                <input ref={fullNameRef} id='full_name' type='text' placeholder='Full Name' required /><br/>
                <input ref={emailRef} id='email'  placeholder='Email' type='email' required /><br/>
                <input ref={passwordRef} id='password'  placeholder='Password' type='password' required /><br/>
                <input ref={confirmPasswordRef} id='password_confirmation'  placeholder='Confirm Password' type='password' required /><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormRef