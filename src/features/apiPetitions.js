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

export async function authGoogle(state){
  try {
    const petition = await axios.get("/auth/google")
    state(setUser(petition?.data.user))
    localStorage.setItem('tkn', petition?.data.token)
  } catch (error) {
    console.log(error)
  }
}

export async function authFacebook(state){
  try {
    const petition = await axios.get("/auth/facebook")
    state(setUser(petition?.data.user))
    localStorage.setItem('tkn', petition?.data.token)
  } catch (error) {
    console.log(error)
  }
}
