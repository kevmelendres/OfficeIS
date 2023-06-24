

changeViews()







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