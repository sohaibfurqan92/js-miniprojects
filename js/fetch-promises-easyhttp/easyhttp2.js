class EasyHTTP{
  get(url){
    return fetch(url)
    .then(res=>{
      if(!res.ok){throw new Error(`Error: ${res.status}`);}
      else{return res.json();}
    })
    .then(data=>data)
    .catch(err=>err);
  }

  post(url,data){
    return fetch(url,{
      method:"POST",
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(data)
    })
    .then(res=>{
      if(!res.ok){throw new Error(`Error: ${res.status}`);}
      else{return res.json();}
    })
    .then(data=>data)
    .catch(error=>error);
  }

  put(url,data){
    return fetch(url,{
      method:"PUT",
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(data)
    })
    .then(res=>{if(!res){throw new Error(`Error: ${res.status}`)}
  else{return res.json();}
  })
  .then(data=>data)
  .catch(err=>err);
  }

  delete(url){
    return fetch(url)
    .then(res=>{
      if(!res.ok){throw new Error(`Error: ${res.status}`);}
      else{return res.json();}
    })
    .then((data)=>`Post ${data.id} Deleted`)
    .catch(err=>err);
  }
}
