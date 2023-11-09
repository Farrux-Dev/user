import React from 'react'
import TextField from '@mui/material/TextField';
import '../App.css'; // Import the CSS file

const Admin = () => {
  return (
    <div className='container center'>
      <br />
    <form method='POST' action='http://localhost:2000'>
  <div className="form-group">
  <TextField  sx={{ width: 600 }} id="outlined-basic" label="First name" variant="outlined" name='name'/>

  </div>
  <br />
  <div className="form-group">
    <TextField  sx={{ width: 600 }} id="outlined-basic" label="Last name" variant="outlined" name='lastname'/>
  </div>
  <br />
  <div className="form-group">
    <TextField sx={{ width: 600 }}  id="outlined-basic" label=" username" variant="outlined" name='username'/>
  </div>
  <br />
  <div className="form-group">
    <TextField sx={{ width: 600 }}  id="outlined-basic" label="Email adress" variant="outlined"name='email'/>
  </div>
  <br />
  <div className="form-group">
    <TextField sx={{ width: 600 }}  id="outlined-basic" label="Password" variant="outlined" name='password'/>
  </div>
  <br />
  <div className="form-group">
  <input type="submit" className=" btn btn-primary" value={"Submit"}/>
  </div>
  <br />
  
</form>

    </div>
   
  )
}

export default Admin
