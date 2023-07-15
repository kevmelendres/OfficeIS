var homeUrl = 'http://127.0.0.1:8000/'


loginUser();
hasValTrigger();
showPasswordTrigger();



function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  
  const csrftoken = getCookie('csrftoken');



function loginUser(){

    let form = document.getElementById('login-form');

    form.addEventListener('submit',function(e){
        e.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        fetch('/',{  
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'X-CSRFToken':csrftoken,

            },
            body: JSON.stringify({
                "username": username,
                'password': password,
                'form': 'login-form',
          }),
          }
          )
          .then(response => response.json())
          .then(function (data) {

            console.log(data);

            if(data.status == 'login-success'){
                
                let passwordWarning = document.getElementById('wrong-credentials')
                passwordWarning.style.visibility = 'hidden'  

                if (data.isLoggedInStaff === true){
                    window.location.href = homeUrl + 'admin-panel';
                } else {
                    window.location.href = homeUrl + 'signup';
                }
            } else {    
                let passwordWarning = document.getElementById('wrong-credentials')
                passwordWarning.style.visibility = 'visible'  
            }

        
                }
            )
    })

}




function hasValTrigger(){

    let elems = document.getElementsByClassName("input100");

    for (let i=0;i<elems.length;i++){
        elems[i].addEventListener('keyup', function () {
            if (elems[i].value != ''){
                elems[i].classList.add("has-val");
            } else {
                elems[i].classList.remove("has-val");
            }

        })
        }
    }


function showPasswordTrigger() {
    let elem = document.getElementById("password");
    let button = document.getElementById("show-password");

    // console.log(button);

    button.addEventListener('click',function(){
        if (elem.type === "password") {
            elem.type = "text";
        } else {
            elem.type = "password";
        }
    })


    }