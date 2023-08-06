import React from 'react'
import './Checkbox.css'

function Checkbox({checkboxRef, checked, onChange}) {
  return (
    <div>
        <input ref={checkboxRef} type='checkbox' id='checkbox' checked={checked} onChange={onChange}></input>
        <label className="toggle" htmlFor="checkbox">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
        </label>
    </div>
  )
}

export default Checkbox