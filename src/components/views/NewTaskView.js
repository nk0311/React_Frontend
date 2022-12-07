
import React from 'react';

const NewTaskView = (props) => {
  const {handleChange, handleSubmit } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            New Task
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
          <input type="text" name="Description" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Priority Level: </label>
          <input type="text" name="Priority Level" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Completion Status: </label>
          <input type="text" name="Completion Status" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>
          
          <label style={{color:'#11153e', fontWeight: 'bold'}}>EmployeeId: </label>
          <input type="text" name="EmployeeID" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button type="submit">
            Submit
          </button>
          <br/>
          <br/>
        </form>
        </div>
      </div>
    
  )
}

export default NewTaskView;