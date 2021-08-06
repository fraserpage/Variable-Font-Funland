import { post, get, deleteOne } from "./fetchUtils";

export async function createWordArt(data){
  delete data['_id']
  let wordArt = await post('/api/word-art', data)
  return wordArt
}

export async function getOneWordArt(id){
  let wordArt = await get(`/api/word-art/${id}`)
  return wordArt
}

export async function deleteOneWordArt(id){
  let wordArt = await deleteOne(`/api/word-art/${id}`)
  return wordArt
}

export async function getAllWordArt(){
  let wordArt = await get('/api/word-art')
  return wordArt
}
