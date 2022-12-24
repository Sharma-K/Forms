import React,{useState, useRef} from 'react'
const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [valid, isValid] = useState(true);
  const name = useRef('');

  const nameInputClasses= valid?'form-control':'form-control invalid'

  const nameInputChangeHandler = (event)=>{
    setEnteredName(event.target.value)
    isValid(true)
  }
  const formSubmissionHandler = (event) =>{
    event.preventDefault();
    if(enteredName.trim()==='')
    {
      isValid(false);
      return;
    }
    isValid(true);
    console.log(enteredName);
    setEnteredName('');
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={name} type='text' id='name' onChange={nameInputChangeHandler} />
       {!valid && <p className='error-text'>Name must not be empty</p> }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
