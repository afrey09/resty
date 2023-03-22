import { useState } from 'react';
import './Form.scss';

const Form = (props) => {
   
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('');
    const [data, setData] = useState('');

    const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      data,
    };
    props.handleApiCall(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="url-input" name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
          <button data-testid="button" type="submit">GO!</button>
        </label>
        <label>json data (if necessary)
          <textarea rows="4" cols="50" onChange={(e) => setData(e.target.value)}/>
        </label>
        <label className="methods">
          <span
            data-testid="get-span"
            onClick={(e) => setMethod(e.target.id)}
            style={{ backgroundColor: method === 'get' ? 'blue' : 'green' }} id="get"
          >
            GET
          </span>
          <span
            data-testid="post-span"
            onClick={(e) => setMethod(e.target.id)}
            style={{ backgroundColor: method === 'post' ? 'blue' : '#green' }} id="post"
          >POST</span>
          <span
            onClick={(e) => setMethod(e.target.id)}
            style={{ backgroundColor: method === 'put' ? 'blue' : 'green' }} id="put"
          >PUT</span>
          <span
            onClick={(e) => setMethod(e.target.id)}
            style={{ backgroundColor: method === 'delete' ? 'blue' : 'green' }} id="delete"
          >DELETE</span>
        </label>
      </form>
    </>
  );
};

export default Form;