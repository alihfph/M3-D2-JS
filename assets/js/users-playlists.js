function fillUsersPlayList(array, menus) {
  menus.forEach((menu) => {
    const ul = document.createElement('ul');
    menu.appendChild(ul);
    ul.innerHTML = array
      .map(
        (album) => `
      <li class="text-truncate animate__animated animate__faster">
        <a href="#" class="playlist-title">${album.title}</a>
      </li>
  `
      )
      .join('');
  });
}
