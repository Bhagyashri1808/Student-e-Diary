import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { deleteUser, getUser, getUsersFromFirestore } from '../../../../firestore/FireStoreService';
import useValidation from '../../../../hooks/useValidation';
import { validateName, validatePassword, validateUserId, validateUserType } from '../../../../utils/Validators';
import ErrorContainer from '../../../ErrorCotainer';
import Grid from '../../../events/structure/Grid'
import Footer from '../../structure/Footer';
import Header from '../../structure/Header';
import Popup from '../../structure/Popup';
import { FormContainer, Option, ButtonCotainer, MainContainer} from './UserMgmt.Style';

const UserManagement = () => {
  const initialState = {
    userId:'',
    name:'',
    password:'',
    userType:'User Type'
};

    const [user, setUser] = useState(initialState);
    const [users, setUsers] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const formRef = useRef(null);
    const [isOpen, setIsOpen] =useState(false);
    const [userIdError, userIdProps] = useValidation(
        user.userId,
        'userId1',
        hasSubmitted,
        validateUserId,
        true
      );
      const [passwordError, passwordProps] = useValidation(
        user.password,
        'password1',
        hasSubmitted,
        validatePassword,
        true
      );

      const [userNameError, userNameProps] = useValidation(
        user.name,
        'name1',
        hasSubmitted,
        validateName,
        true
      );

      const [userTypeError, userTypeProps] = useValidation(
        user.userType,
        'userType1',
        hasSubmitted,
        validateUserType,
        true
      );
        useEffect(()=>{
          const ref = getUsersFromFirestore();
          ref.on('value', (snapshot) => {
            setUsers(Object.values(snapshot.val()));
        })

        return () => ref.off();
        },[users]);
  
      const deleteData = (userId) => {
      const ref = deleteUser(userId);
      ref.remove().then(function() {
        console.log("Remove succeeded.")
        const newUserList = users.filter((element)=>{
          return element.userId !== userId;
        })
        setUser(initialState);
        setUsers(newUserList);
        ref.off();
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (userIdError || passwordError || userNameError || userTypeError) {
          setTimeout(() => {
            const errorController = formRef.current.querySelector(
              '[aria-invalid="true"]'
            );
            errorController.focus();
          });
        } else {
            const ref = getUser(user.userId);
            ref.update(user).then(()=>{
              setIsOpen(!isOpen);
            });

        }
    }

    //const columnHeaders = {'userId':'ID','name':'Name','password':'Password'};
    const columnHeaders = [
        {key:'select',value:'Select',type:'boolean'},
        {key:'userId',value:'ID',type:'text'},
        {key:'name',value:'Name',type:'text'},
        {key:'password',value:'Password',type:'text'},
        {key:'delete',value:'Delete',type:'actionButton',func:deleteData}
    ];

    const getSelectedRow = (user) => {
          setUser(user);    
    }

    const onChangeHanlder = (e) => {
        const newUser = {
            ...user,
            [e.target.name]:e.target.value
        }
        setUser(newUser);
    }

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    return (
        <>
        <Header titleText='User Management |'/>
        <MainContainer >
        <FormContainer className='form-container'>
        <form onSubmit={onSubmitHandler} noValidate ref={formRef}>
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
            value = {user.userId}
            placeholder='UserId*'
          />
        </ErrorContainer>

        <ErrorContainer errorText={userNameError} hasSubmitted={hasSubmitted} errorId='name1'>
            <input id='name' name='name' type='text' onChange={onChangeHanlder} {...userNameProps}
            value={user.name} placeholder='Name' />
        </ErrorContainer>
        <ErrorContainer
          errorText={passwordError}
          hasSubmitted={hasSubmitted}
          errorId="password1"
        >
          <input
            id="password"
            name="password"
            type="text"
            value = {user.password}
            onChange={onChangeHanlder}
            {...passwordProps}
            placeholder='Password'
          />
        </ErrorContainer>
        <ErrorContainer
        errorText={userTypeError}
        hasSubmitted={hasSubmitted}
        errorId='usertype1'
        >
        <select id='userType' name='userType' value={user.userType} onChange={onChangeHanlder} placeholder='User Type'
        {...userTypeProps}>
            <Option value='' defaultValue hidden style={{color:'#929292'}}>User Type</Option>
        <Option value='Admin'>Admin</Option>
        <Option value='Teacher'>Teacher</Option>
        <Option value='Student'>Student</Option>
        </select>
        </ErrorContainer>
        {
          isOpen && <Popup text='User added successfully !' handleClose={togglePopup}/>
        }
        <ButtonCotainer className='button-container'>
        <button type="submit" className='ok'>
            Add / Update
          </button>
        </ButtonCotainer>
        </form>
        </FormContainer>    
      <Grid
        columnHeaders={columnHeaders}
        tableDataSource={users}
        isRowSelectable={true}
        onChange={getSelectedRow}
      />
        </MainContainer>
        <Footer/>
        </>
    );

};

export default UserManagement;