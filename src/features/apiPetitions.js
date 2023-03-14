import axios from "./axios.js";
import { setUser } from "./userSlice.js";

export async function getHello(state) {
  try {
    const petition = await axios.get("/");
    return state(petition.data);
  } catch (error) {
    // aca es donde se implementaria el manejo de error, con algun modal, pagina de error etc
    throw new Error('algo salio mal :(')
  }
}

export async function registerUser(body, state) {
  try {
    const petition = await axios.post("/users/register", body);
    state(setUser(petition?.data.user))
    localStorage.setItem('tkn', petition?.data.token)
  } catch (error) {
    // aca es donde se implementaria el manejo de error, con algun modal, pagina de error etc
    console.log(error)
    throw new Error('algo salio mal :(')
  }
}

export async function loginUser(body, state){
  try {
    const petition = await axios.post("/users/login", body)
    state(setUser(petition?.data.user))
    localStorage.setItem('tkn', petition?.data.token)
  } catch (error) {
    console.log(error)
  }
}
export async function authUser(token, state){
  try {
    const petition = await axios.get("/users/auth", {
      headers:{
        authorization:`Bearer ${token}`
      }
    })
    state(setUser(petition?.data))
    localStorage.setItem('user', petition?.data);
    return
  } catch (error) {
    localStorage.removeItem('tkn')
    window.location.pathname = '/'
  }
}

// export async function authGoogle(state){
//   try {
//     window.location.href = "http://localhost:5000/api/auth/google"
//   } catch (error) {
//     console.log(error)
//   }
// }

// export async function authFacebook(state){
//   try {
//     const petition = await axios.get("/auth/facebook")
//   } catch (error) {
//     console.log(error)
//   }
// }
