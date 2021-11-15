const { form }=rxjs;  
window.onload=function(){ 
    
    document.getElementById("btn").onclick=function(){   
        const users=document.getElementById("num").value;
        
        fetchUsers(users);
        

    }
}
async function fetchUsers(users){ 
    let result= await fetch('http://jsonplaceholder.typicode.com/posts' + users); 
    let user= await result.json();
    renderUsers(user.results) 



}
function renderUsers(user){
    const userDiv =document.getElementById('numberOfUsers');
    userDiv.innerHTML = '';

    form(user)
    .subscribe(userr => {
        let template =`
        <div class="col">
        ${userr.name.first}
            </div>
            <div class="col">
                <p class="fw-bold">Location</p>
                <p>${userr.location.street.number} ${emp.location.street.name}</p>
                <p>${userr.email} </p>
               
            </div>
            <hr>
        `
  
       let div = document.createElement('div'); 
       div.innerHTML = template;
       div.classList='row' 

       userDiv.appendChild(div);

    });

}