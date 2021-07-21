import React, { useState, useRef } from 'react';
import { getUser } from '../../../firestore/FireStoreService';
import ErrorContainer from '../../ErrorCotainer';
import { validateUserId, validatePassword } from '../../../utils/Validators';
import useValidation from '../../../hooks/useValidation';
import {useHistory} from 'react-router-dom';
import { useAppContext } from '../../../utils/AppContext';
import Popup from '../structure/Popup';

const LoginForm = () => {
  const history = useHistory();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
 // console.log(useAppContext().value);
  let {setIsAuthorized} = useAppContext();
  const [userIdError, userIdProps] = useValidation(
    userId,
    'userId1',
    hasSubmitted,
    validateUserId,
    true
  );
  const [passwordError, passwordProps] = useValidation(
    password,
    'password1',
    hasSubmitted,
    validatePassword,
    true
  );
  const formRef = useRef(null);

  const onChangeHanlder = (e) => {
    if (e.target.name === 'userId') {
      setUserId(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (userIdError || passwordError) {
      setTimeout(() => {
        const errorController = formRef.current.querySelector(
          '[aria-invalid="true"]'
        );
        errorController.focus();
      });
    } else {
      const ref = getUser(userId);
      ref.on('value', (snapshot) => {
        const user = snapshot.val();
        if (user && user.password === password) {
          localStorage.setItem('user', JSON.stringify(user));
          setIsAuthorized(true);
          history.push('/menu');
        }
        else{
          togglePopup();
        }
        ref.off();
      });
    }
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const resetValues = () =>{
    setUserId('');
    setPassword('');
    setHasSubmitted(false);
    setIsOpen(false);
  }

  return (
    <div className='root'>
    <div className="form-container">
      <h1>Student e-Diary</h1>
      <form
        className="login"
        onSubmit={onSubmitHandler}
        noValidate
        ref={formRef}
      >
        <ErrorContainer
          errorText={userIdError}
          hasSubmitted={hasSubmitted}
          errorId="userId1"
        >
          <input
            id="userId"
            name="userId"
            type="text"
            onChange={onChangeHanlder}
            {...userIdProps}
            value = {userId}
            placeholder='User Id'
          />
        </ErrorContainer>
        <ErrorContainer
          errorText={passwordError}
          hasSubmitted={hasSubmitted}
          errorId="password1"
        >
          <input
            id="password"
            name="password"
            type="password"
            value = {password}
            onChange={onChangeHanlder}
            {...passwordProps}
            placeholder='Password'
          />
        </ErrorContainer>
        {
          isOpen && <Popup text='Invalid UserId and Password !' handleClose={togglePopup}/>
        }
        <div className="button-container">
          <button type="submit" className="ok">
            Log in
          </button>
          <button className="warning" type="button" onClick={resetValues}>
            Reset
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
