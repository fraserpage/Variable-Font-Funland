import jwt_decode from "jwt-decode";
import {post, get} from './fetchUtils'

export async function registerNewUser(formData) {
  try {
    let token = await post("/api/users/signup", formData)
    localStorage.setItem("token", token); 
    return getUserFromToken(token);
  } 
  catch (err) {
    return err;
  }
}

export async function attemptLogin(formData) {
  try {
    let token = await post("/api/users/login", formData)
    localStorage.setItem("token", token);
    return getUserFromToken(token);
  } 
  catch (err) {
    return err;
  }
}

export async function validateToken() {
  let tokenStatus = await get("/api/users/validateToken")
  return tokenStatus
}

export function getUserFromToken(passedToken) {
  let token = passedToken || localStorage.getItem('token')
  if (token){
    const userDoc = JSON.parse(atob(token.split(".")[1])).user; 
    return userDoc;
  }
  return null
}

//given token/check if expired
export function checkExp(token) {
  if (!token) return false;
  let res = jwt_decode(token);

  let now = new Date();
  if (now.getTime() < new Date(res.exp).getTime()) {
    localStorage.removeItem("token");
    return false;
  } else return true;
}

export function logout() {
  localStorage.removeItem("token");
  // window.location.replace("/");
}