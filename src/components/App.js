//<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React from 'react'
import {  Link, Route, Routes } from 'react-router-dom'
import Form from './Form'
import FormRef from './FormRef'
import FormState from './FormState'


const App = () => {
  return (
    <div>
      <Link to='/section1' id='form-link' >section 1</Link><br/>
      <Link to='/section2' id='form-ref-link' >section 2</Link><br/>
      <Link to='/section3' id='form-state-link' >section 3</Link><br/>
      
         <Routes>
            <Route path='/section1' element={<Form />} />
            <Route path='/section2' element={ <FormRef />} />
            <Route path='/section3' element={ <FormState />} />
         </Routes>
    </div>
  )
}

export default App
