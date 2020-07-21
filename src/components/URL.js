import React,{useState} from 'react';
import axios from 'axios';

function URL() {
const [value, setValue] = useState(null);
const [input, setInput] = useState("");
const handleInputChange = (e) => {
  setInput(e.target.value);
};
const postdata = {
  longUrl: input,
};
const handleURL = () => {
  axios
    .post(`${process.env.REACT_APP_REST_ENDPOINT}/shorten`, postdata)
    .then(({ data: { shortUrl } }) => {
      setValue(shortUrl);
    });
};

return (
  <>
    <div className="container p-5 ">
      <div className="form-group">
        <label htmlFor="inputUrl " className="label1">
          URL
        </label>
        <input
          type="text"
          id="inputUrl"
          className="form-control"
          placeholder="Enter your Url"
          name="longUrl"
          value={input}
          onChange={handleInputChange}
          required
        ></input>
      </div>
      <button onClick={() => handleURL()} className="btn btn-success">
        Submit
      </button>
      <br />
      <br />
      {value ? (
        <div className="form-group">
          <label htmlFor="showUrl" className="label2">
            SHORT URL
          </label>
          <input className="form-control" value={value} readOnly></input>
        </div>
      ) : null}
    </div>
  </>
);

}

export default URL;
