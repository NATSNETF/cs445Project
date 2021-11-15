
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
        
        <div class="col">
        ${user.name}
            </div>
            <div class="col">
            <p>${user.email} </p>
                <p class="fw-bold">Address</p>
                <p>${user.address.street}</p>
                <p> ${user.address.suite}</p>
                <p> ${user.address.city}</p>
                <p> ${user.address.zipcode}</p> 
            </div>
            <button id="Getpost">Get Post</button>
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
        <div class="col">
        <p>user posts</p> 
        ${post.title}
            </div>
            <div class="col">
            <p>${post.body} </p> 
            </div>
            <button id="comment">show comment</button>
            <hr>
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
        <div class="col">
        <p>user posts</p> 
        ${comment.name}
            </div>
            <div class="col">
            <p>${comment.email} </p> 
            <p>${comment.body} </p> 
            </div>
            
            <hr>
        `

       let div = document.createElement('div'); 
       div.innerHTML = template;
       div.classList='row' 
       userDiv.appendChild(div);
       


    })
}


        
  
       
