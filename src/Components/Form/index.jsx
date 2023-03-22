import React from 'react';
import './Form.scss';

const Form = (props) => {
  
  const handleSubmit = e => {
   
    e.preventDefault();
    const formData = {
      method: e.target.method.value || 'GET',
      url: e.target.url.value,
    };
    props.handleApiCall(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text'/>
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <select>
            <option id="get">GET</option>
            <option id="post">POST</option>
            <option id="put">PUT</option>
            <option id="delete">DELETE</option>
          </select>
        </label>
      </form>
    </>
  );
}


export default Form;