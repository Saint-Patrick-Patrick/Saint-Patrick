import axios from "./axios.js";

export async function getHello(state) {
  try {
    const petition = await axios.get("/");
    return state(petition.data);
  } catch (error) {
    // aca es donde se implementaria el manejo de error, con algun modal, pagina de error etc
    throw new Error('algo salio mal :(')
  }
}

export async function registerUser(body) {
  try {
    const petition = await axios.post("/users/register", body);
    return petition?.data;
  } catch (error) {
    // aca es donde se implementaria el manejo de error, con algun modal, pagina de error etc
    console.log(error)
    throw new Error('algo salio mal :(')
  }
}