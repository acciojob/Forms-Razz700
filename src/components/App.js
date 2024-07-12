//<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React from 'react'
import {  Link, Route, Routes } from 'react-router-dom'
import Form from './Form'
import FormRef from './FormRef'
import FormState from './FormState'


const App = () => {
  return (
    <div>
      <Link to='/form' id='form-link' >section 1</Link><br/>
      <Link to='/form-ref' id='form-ref-link' >section 2</Link><br/>
      <Link to='/form-state' id='form-state-link' >section 3</Link><br/>
      <input type='text' id='full_name'/>
         <Routes>
            <Route path='/form' element={<Form />} />
            <Route path='/form-ref' element={ <FormRef />} />
            <Route path='/form-state' element={ <FormState />} />
         </Routes>
    </div>
  )
}

export default App
