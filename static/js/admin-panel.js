// var homeUrl = 'https://kevmelendres-vigilant-couscous-pqp75qwg9gqf6jwg-8000.preview.app.github.dev/'
var homeUrl = 'http://127.0.0.1:8000/'


changeManageUsersTab();
changeViews();
showHideAssignTL();
buildEmployeeList();
registerUser();




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





function changeViews () {

  document.querySelector('#home-button').style.backgroundColor = '#2E8A99'

  let contentButtons = document.querySelectorAll('.content-button')

  for (i = 0; i<contentButtons.length; ++i) {
    contentButtons[i].addEventListener("click", function(){
      
      let buttonId = this.id
      let contentTabs = document.querySelectorAll('.content-tab')
      let contentButtonColors = document.querySelectorAll('.content-button')

      switch(buttonId) {
        case 'home-button':
          for (let i=0;i<contentTabs.length;++i){
            if (contentTabs[i].id != 'home-tab'){
              contentTabs[i].style.display = 'none'
            } else {
              contentTabs[i].style.display = 'block'
            }
          }

          for (let i=0;i<contentButtonColors.length;++i){
            if (contentButtonColors[i].id == 'home-button'){
              contentButtonColors[i].style.backgroundColor = '#2E8A99'
            } else {
              contentButtonColors[i].style.backgroundColor = ''
            }
          }

          break;

        case 'manageusers-button':
          for (let i=0;i<contentTabs.length;++i){
            if (contentTabs[i].id != 'manageusers-tab'){
              contentTabs[i].style.display = 'none'
            } else {
              contentTabs[i].style.display = 'block'
            }
          }

          for (let i=0;i<contentButtonColors.length;++i){
            if (contentButtonColors[i].id == 'manageusers-button'){
              contentButtonColors[i].style.backgroundColor = '#2E8A99'
            } else {
              contentButtonColors[i].style.backgroundColor = ''
            }
          }
          break;
        
        case 'messages-button':
          for (let i=0;i<contentTabs.length;++i){
            if (contentTabs[i].id != 'messages-tab'){
              contentTabs[i].style.display = 'none'
            } else {
              contentTabs[i].style.display = 'block'
            }
          }

          for (let i=0;i<contentButtonColors.length;++i){
            if (contentButtonColors[i].id == 'messages-button'){
              contentButtonColors[i].style.backgroundColor = '#2E8A99'
            } else {
              contentButtonColors[i].style.backgroundColor = ''
            }
          }
          break;

      }




    })
  }

}

function changeManageUsersTab(){

  let curActive = document.querySelector('#employee-registration-select-tab');
  curActive.classList.toggle('active'); 
  
  let manageUsersSelectTabs = document.querySelectorAll('.manage-users-select-tab');


  for (let i = 0; i<manageUsersSelectTabs.length; ++i) {
    manageUsersSelectTabs[i].addEventListener("click", function(){

      tabId = this.id;

      let manageUsersTabs = document.querySelectorAll('.manage-users-tab');


      switch(tabId) {
        case 'employee-registration-select-tab':
          for (let i = 0;i<manageUsersTabs.length;++i){
            if (manageUsersTabs[i].id != 'employee-registration-tab'){
              manageUsersTabs[i].style.display = 'none'
            } else {
              manageUsersTabs[i].style.display = 'block'
            }
          }

          for (let i=0;i<manageUsersSelectTabs.length;++i){
            if (manageUsersSelectTabs[i].id != 'employee-registration-select-tab'){
              manageUsersSelectTabs[i].classList.remove('active')
            } else {
              manageUsersSelectTabs[i].classList.add('active')
            }
          }

          
          break;

        case 'employee-list-select-tab':
            for (let i = 0;i<manageUsersTabs.length;++i){
              if (manageUsersTabs[i].id != 'employee-list-tab'){
                manageUsersTabs[i].style.display = 'none'
              } else {
                manageUsersTabs[i].style.display = 'block'
              }
            }

            for (let i=0;i<manageUsersSelectTabs.length;++i){
              if (manageUsersSelectTabs[i].id != 'employee-list-select-tab'){
                manageUsersSelectTabs[i].classList.remove('active')
              } else {
                manageUsersSelectTabs[i].classList.add('active')
              }
            }
  

          break;

        case 'project-assignment-select-tab':
              for (let i = 0;i<manageUsersTabs.length;++i){
                if (manageUsersTabs[i].id != 'project-assignment-tab'){
                  manageUsersTabs[i].style.display = 'none'
                } else {
                  manageUsersTabs[i].style.display = 'block'
                }
              }

              for (let i=0;i<manageUsersSelectTabs.length;++i){
                if (manageUsersSelectTabs[i].id != 'project-assignment-select-tab'){
                  manageUsersSelectTabs[i].classList.remove('active')
                } else {
                  manageUsersSelectTabs[i].classList.add('active')
                }
              }
    
           
            break;
      }
    })
  }
}

function showHideAssignTL(){
  let employeeRoles = document.querySelector('#employee-role-select');

  employeeRoles.addEventListener('change',function(){
    if (this.value === "Team Leader") {
      document.querySelector('#assign-to-team-container').style.display='none';

    } else {
      document.querySelector('#assign-to-team-container').style.display='block';
    }

  });
  
  }

function buildEmployeeList(){

  let wrapper = document.getElementById('employee-list-container');
  wrapper.innerHTML = ''
  let sourceURL = homeUrl + 'api/allUserLogins/';


  fetch(sourceURL)
  .then((resp) => resp.json())
  .then(function(data){
    let employeeList = data

    for (let i = 0; i< employeeList.length;i++){
      let item = `
        <a href="#" class="list-group-item list-group-item-action list-group-item-light each-employee-tab">
          <div class="row">
              <div class="col-md-8">
              ${employeeList[i].username}
              </div>
              <div class="col-md-2 text-center employee-buttons">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editDetailsModal" id='update-button-${employeeList[i].id}'>Update</button>
              </div>
              <div class="col-md-2 text-center employee-buttons" data-bs-toggle="modal" data-bs-target="#confirmDelete" id='delete-button-${employeeList[i].id}'>
                  <button type="button" class="btn btn-danger">Delete</button>
              </div>
          </div>
        </a>

      `


      wrapper.innerHTML += item

    }




  })

}

function registerUser(){

  let form = document.getElementById('registration-form');

  form.addEventListener('submit',function(e){
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;

    let username = document.getElementById('username').value;
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;

    let employeeRole = document.getElementById('employee-role-select').value;
    e.preventDefault();

    let userlistUrl = homeUrl + 'api/userListViewer/';


    fetch(userlistUrl)
    .then((resp) => resp.json())
    .then(function(data){
      let userList = data

      for (key in userList) {
        if (userList[key]['username'] == username){

          document.querySelector("#username").classList.add('is-invalid');
          document.querySelector("#username").classList.remove('is-valid');
          document.querySelector("#validationUsernameFeedback").classList.add('invalid-feedback');
          document.querySelector("#validationUsernameFeedback").classList.remove('valid-feedback');
          document.querySelector("#validationUsernameFeedback").innerText = "Username already taken.";

          return;
        
        } else {
          document.querySelector("#username").classList.add('is-valid');
          document.querySelector("#username").classList.remove('is-invalid');
          document.querySelector("#validationUsernameFeedback").classList.add('valid-feedback');
          document.querySelector("#validationUsernameFeedback").classList.remove('invalid-feedback');
          document.querySelector("#validationUsernameFeedback").innerText = "Username available!";

        }
      }
    
    })


    // VALIDATION CHECKS!




    // check if passwords are same
    if (password1 != password2) {
      document.querySelector("#password1").classList.add('is-invalid');
      document.querySelector("#password1").classList.remove('is-valid');
      document.querySelector("#password2").classList.add('is-invalid');
      document.querySelector("#password2").classList.remove('is-valid');
      document.querySelector("#validationPasswordFeedback").classList.add('invalid-feedback');
      document.querySelector("#validationPasswordFeedback").classList.remove('valid-feedback');
      document.querySelector("#validationPasswordFeedback").innerText = "Passwords do not match!";
      return;

    } else {
      document.querySelector("#password1").classList.add('is-valid');
      document.querySelector("#password1").classList.remove('is-invalid');
      document.querySelector("#password2").classList.add('is-valid');
      document.querySelector("#password2").classList.remove('is-invalid');
      document.querySelector("#validationPasswordFeedback").classList.add('valid-feedback');
      document.querySelector("#validationPasswordFeedback").classList.remove('invalid-feedback');
      document.querySelector("#validationPasswordFeedback").innerText = "Passwords match!";
    }



    // END OF VALIDATION CHECKS!


    if (employeeRole=='Member') {
        let userUrl = homeUrl + 'api/createuser/'
        let memberUrl = homeUrl + 'api/createmember/'
        
        fetch(userUrl,{
          method:'POST',
          headers:{
            'Content-type':'application/json',
            'X-CSRFToken':csrftoken,
          },
          body:JSON.stringify({"username": username,
          "first_name": firstname,
          "last_name": lastname,
          "email": email,
          "password": password1
        }
        
          ),
        }
        )

        new bootstrap.Modal(document.querySelector("#registrationSuccess")).show();
        buildEmployeeList();

    } else {
        let url = homeUrl + 'api/createteamleader/'
    }


}
  )
}

