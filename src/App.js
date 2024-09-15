import {useState} from "react"
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstname:'',
    lastname:'',
    email:'',
    gender:'',
    contact:'',
    subject:'',
    resume:'',
    url:'',
    about:''
  });
  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:[e.target.value]})

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(values)
  }
  const ResetFun =()=>{
    setValues({firstname:'',lastname:'',email:''})
  }
  
  return (
    <div className="container">
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name*</label>
        <input type="text" placeholder="Enter your First Name" name="firstname"
        onChange={(e)=>handleChange(e)} required value={values.firstname}/>

        <label htmlFor="lastname">Last Name*</label>
        <input type="text" placeholder="Enter your Last Name" name="lastname" 
        onChange={(e)=>handleChange(e)} required value={values.lastname}/>

        <label htmlFor="email">Email*</label>
        <input type="emai" placeholder="Enter your email" name="email" 
        onChange={(e)=>handleChange(e)} required value={values.email}/>

        <label htmlFor="contact">Contact*</label>
        <input type="text" placeholder="Enter your Phone number" name="contact" 
        onChange={(e)=>handleChange(e)}/>

        <label htmlFor="gender">Gender*</label>
        <input type="radio" name="gender" 
        onChange={(e)=>handleChange(e)}/>Male
        <input type="radio" name="gender" 
        onChange={(e)=>handleChange(e)}/>Female
        <input type="radio" name="gender" 
        onChange={(e)=>handleChange(e)}/>Other

        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject"onChange={(e)=>handleChange(e)}>
          <option value="math">Math</option>
          <option value="computer">Computer</option>
          <option value="physics">Physics</option>
        </select>
        <label htmlFor="resume">Resume</label>
        <input type="file" placeholder="Select Resume" name="resume" 
        onChange={(e)=>handleChange(e)}/>

        <label htmlFor="url">URL</label>
        <input type="text" name="url" placeholder="Enter Image URL" 
        onChange={(e)=>handleChange(e)}/>

        <label htmlFor="about">About</label>
        <textarea name="about" id="about" cols="30" rows="10"
        onChange={(e)=>handleChange(e)} placeholder="Enter description"  ></textarea>

        <button type="button" onClick={ResetFun}>Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
