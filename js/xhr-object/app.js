document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  //create a new XMLHttpRequest Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET','data.txt',true);
  console.log('readyState',xhr.readyState);

  //used for spinners and loaders
  xhr.onprogress = function(){
    console.log(xhr.readyState);
  }
  // ONLOAD - NEW
  xhr.onload = function(){
    //when onload runs, readyState is already = 4
  console.log('readyState',xhr.readyState);

    //check everything ok
    if(this.status ==200){
      document.getElementById('output').innerHTML= `<h1>${this.responseText}</h1>`;
    }
  }

  // OnReadyStateChange - OLDER
  // xhr.onreadystatechange = function(){
  // console.log('readyState',xhr.readyState); //goes through all states
  //   if(this.status==200 && this.readyState==4){
  //     console.log(this.responseText);
  //   }
  // }

  // SEND
  xhr.send(); //to actually send the  request

  xhr.onerror = function(){
    console.log('error');
  }
}