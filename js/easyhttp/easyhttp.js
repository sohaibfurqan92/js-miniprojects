// https://jsonplaceholder.typicode.com/

function EasyHTTP(){
  this.http = new XMLHttpRequest();
}

// GET
EasyHTTP.prototype.get = function(url,callback){
  this.http.open('GET',url,true);
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null,self.http.responseText);
    }
    else{
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// POST
EasyHTTP.prototype.post = function(url,data,callback){
  this.http.open('POST',url,true);
  this.http.setRequestHeader('Content-type','application/json');
  const self = this;
  this.http.onload = function(){
   callback(self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}
// PUT (update)
EasyHTTP.prototype.put = function(url,data,callback){
  this.http.open('PUT',url,true);
  this.http.setRequestHeader('Content-type','application/json');
  const self = this;
  this.http.onload = function(){
   callback(self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}
// DELETE
EasyHTTP.prototype.delete = function(url,callback){
  this.http.open('DELETE',url,true);
  this.http.setRequestHeader('Content-type','application/json');
  this.http.onload = function(){
   callback('Post Deleted');
  }
  this.http.send();
}
