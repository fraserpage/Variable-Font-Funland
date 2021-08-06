export async function post(url, formData) {
  let jwt = localStorage.getItem('token')
  let authHeader = jwt && {'Authorization': 'Bearer ' + jwt} 
  let fetchOptions = {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      ...authHeader
    },
    body: JSON.stringify(formData),
  }
  const fetchResponse = await fetch(url, fetchOptions);  
  const data = await fetchResponse.json();
  if (!fetchResponse.ok) throw data;
  return data;
}

export async function deleteOne(url) {
  let jwt = localStorage.getItem('token')
  let authHeader = jwt && {'Authorization': 'Bearer ' + jwt} 
  let fetchOptions = {
    method: "DELETE",
    headers: { 
      "Content-Type": "application/json",
      ...authHeader
    },
  }
  const fetchResponse = await fetch(url, fetchOptions);  
  const data = await fetchResponse.json();
  if (!fetchResponse.ok) throw data;
  return data;
}

export async function get(url){
  const jwt = localStorage.getItem('token')
  const fetchOptions = jwt ? { 
    headers: {'Authorization': 'Bearer ' + jwt} 
  } : {}
  const fetchResponse = await fetch(url, fetchOptions)
  let data = await fetchResponse.json();
  if (!fetchResponse.ok) throw data;
  return data;
}