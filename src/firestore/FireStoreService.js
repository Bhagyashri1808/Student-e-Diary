import firebase from '../config/firebase';

const db = firebase.database();

export const getUsersFromFirestore = () => {
    const ref = db.ref('users');
    return ref;
    
} 

export const getUser = (userId) => {
    const ref = db.ref(`users/${userId}`);
    // ref.on('value', (snapshot) => {
    //     user = snapshot.val();
    //     if(user.password === password){
    //         alert('yes you did it');
    //     }
    //     ref.off();
    // });
    return ref;
} 

export const deleteUser = (userId) => {
    const ref = db.ref(`users/${userId}`);
    return ref;
}

export const getMenuList = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const ref = db.ref(`/menus/${user.userType}`);
   // console.log(typeof(JSON.parse(user)));
    return ref;
}