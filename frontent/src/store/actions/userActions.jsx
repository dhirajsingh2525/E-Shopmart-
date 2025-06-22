import axios from "../../api/config";
import { loginuser, logoutuser } from "../reducers/userSlice"


export const asynccurrentuser = () => async(dispatch, getState) =>{
    try {
         const user = JSON.parse(localStorage.getItem('user'))
       if(user){
        dispatch(loginuser(user))
        console.log("Session restored!")
        }else{
        console.log("signin to access the resorce!")
       }    
    } catch (error) {
        console.log(error)
    }
}

export const asyncsigninuser = (user) => async(dispatch, getState) =>{
  try {
     const {data} = await axios.get(
    "/users?email=" + user.email + "&password=" + user.password
   )
   console.log(data)
   if(data[0]){
    localStorage.setItem("user", JSON.stringify(data[0]))
    dispatch(asynccurrentuser())
    console.log("user logged in")
   }else{
    console.log("wrong credentials")
   }
  } catch (error) {
    console.log(error)
  }
}

export const asyncsignupuser = (user) => async(dispatch, getState) =>{
    try {
        await axios.post("/users", user)
          console.log('user register !')
    } catch (error) {
        console.log(error)
    }
}

export const asynclogoutuser = () => (dispatch, getState) =>{
    try {
        localStorage.removeItem('user')
        dispatch(logoutuser())
        console.log("user loggout !")
    } catch (error) {
        console.log(error)
    }
}

export const asyncupdateuser = (id, user) => async(dispatch, getState) =>{
    try {
      const {data} = await axios.patch('/users/'+ id, user);
        localStorage.setItem('user', JSON.stringify(data))
         dispatch(asynccurrentuser());
         console.log("user updated !") 
    } catch (error) {
        console.log(error)
    }
}
                       
export const asyncdeleteuser = (id) => async(dispatch, getState) =>{
    try {
         await axios.delete("/users/" +id)
         localStorage.removeItem('user')
         dispatch(logoutuser());
         console.log('user deleted !')
    } catch (error) {
        console.log(error)
    }
}
