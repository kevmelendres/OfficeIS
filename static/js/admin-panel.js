
changeManageUsersTab();
changeViews();
showHideAssignTL();








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


