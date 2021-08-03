import { post, get } from "./fetchUtils";

export async function createWordArt(data){
  let wordArt = await post('/api/word-art', data)
  console.log(wordArt)
  return wordArt
}

export async function getAllWordArt(){
  let wordArt = await get('/api/word-art')
  console.log(wordArt)
  return wordArt
}