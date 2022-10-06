import React from 'react';
import "./TextInput";

function TextInput(props) {
  
  return (
    <div className="col-12 col-md-6">
      <div className="form-group form-floating mb-3">
        <form className='form-floating'>
          <input
            className="form-control"
            type="text"
            name="id"
            id="floatingInput"
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            >
          </input>
          <label for="floatingInput">{props.label}</label>
        </form>
      </div>
    </div>
  )
}

export default TextInput;