///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ========== login scripts ================
///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function getUserData() {
  const loginUserName = document.getElementById("loginUser")
  const loginUserTextName = loginUserName.value
  userName.innerText = loginUserTextName
  login.classList.add('d-none');
  home.classList.remove('d-none');
  showHomePage();
  fillUsersPlayList(musicStore, [userPlaylists, sideMenuMobile]);
  setTimeout(() => {
    showToaster(loginUserTextName) 
  }, 200);

  
}

loginBtn.addEventListener("click", getUserData)


function showToaster(user) {
  // Get the snackbar DIV

  // Add the "show"
  const html = `<div id="welcometext" class="show backdrop-blur-toaster line-clamp-toaster"> <i class="fab fa-spotify"></i> Welcome Back ${user} <i class="fab fa-spotify"></i> </div>`

  // After 3 seconds, remove the show class from DIV
  toasterEntryPoint.innerHTML = html
  console.log(toasterEntryPoint)
  console.log(html)
  setTimeout(() => {
    toasterEntryPoint.remove()
  }, 2000);
  
}
/* loginBtn.addEventListener('click', () => {
  login.classList.add('d-none');
  home.classList.remove('d-none');
  showHomePage();
  fillUsersPlayList(musicStore, [userPlaylists, sideMenuMobile]);
});
 */

//  this is for auto login, in order to start coding right away without having to click each time login






