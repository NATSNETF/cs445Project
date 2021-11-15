
window.onload=function(){ 
    document.getElementById("btn").onclick=function(){   
        const usersId=document.getElementById("num").value;
        fetchUsers(usersId);
    }
}
async function fetchUsers(usersId){ 
    let result= await fetch('http://jsonplaceholder.typicode.com/users/'+usersId); 
    let user= await result.json();
    renderUsers(user) 
}
function renderUsers(user){
    const userDiv =document.getElementById('numberOfUsers');
    userDiv.innerHTML = '';
    
        let template =`
        <h2 class="text-primary">User Information :</h2>
        <div class="container p-5 my-5 border">
        <div class="col-4">
        <p>${user.name}</p>
        <p>${user.email} </p>
        <p class="text-danger">Address</p>
                <p>${user.address.street}</p>
                <p> ${user.address.suite}</p>
                <p> ${user.address.city}</p>
                <p> ${user.address.zipcode}</p> 
            </div>
            <div class="row-4">
            <button id="Getpost"class="btn btn-primary">Get Post</button>
            </div>
           
        </div>
       
            <hr>
        `
  
       let div = document.createElement('div'); 
       div.innerHTML = template;
       div.classList='row' 

       userDiv.appendChild(div);
       document.getElementById('Getpost').onclick=function(){
           fetchPosts(user.id)
       }

  }
  async function fetchPosts(usersId){ 
    let result= await fetch('http://jsonplaceholder.typicode.com/posts?'+usersId); 
    let user= await result.json();
    renderPosts(user) 
}
function renderPosts(user){
    const userDiv =document.getElementById('numberOfPosts');

    userDiv.innerHTML = '';
    user.map(post => {
        let template =`
        <h2  class="text-primary">User Posts</h2> 
        <div class="col-4">
       <p> Title: ${post.title}</p>
       <p>body: ${post.body} </p> 
            </div>
          
            <div class="row-4">
            <button id="comment" class="btn btn-info">show comment</button>
            </div>
        `
  
       let div = document.createElement('div'); 
       div.innerHTML = template;
       div.classList='row' 

       userDiv.appendChild(div);
       document.getElementById('comment').onclick=function(){
           fetchComment(post.id)
       }


    })
}
async function fetchComment(postId){ 
    let result= await fetch('http://jsonplaceholder.typicode.com/comments?'+postId); 
    let comment= await result.json();
    renderComment(comment) 
}
function renderComment(comments){
    const userDiv =document.getElementById('comment');

    userDiv.innerHTML = '';
    comments.map(comment => {
        let template =` 
        <p class="text-danger">Comment :</p>
        <div class="row-4">
        <p>Name : ${comment.name}</p>
        <p>Email :${comment.email} </p> 
        <p>body : ${comment.body} </p> 
        </div>
      
            <hr>
        `

       let div = document.createElement('div'); 
       div.innerHTML = template;
       div.classList='row' 
       userDiv.appendChild(div);
    })
}


        
  
       
