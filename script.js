let status_name = document.querySelector("h3");
let btn = document.querySelector("#add");
let check = 0




btn.addEventListener("click", function(){
    if(check == 0){
        status_name.innerHTML= "Friends"
        status_name.style.color = "green"
        btn.innerHTML = "Remove Friend"
        btn.style.backgroundColor = "lightcoral"
        check = 1
    }else{
        status_name.innerHTML= "Stranger"
        status_name.style.color = "red"
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "hotpink"

        
    }

})

