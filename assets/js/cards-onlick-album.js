// jsEntryPoint.addEventListener('click', getCardInfo);

function getCardsInfo(e) {
  // switch (true) {
  //   case !e.target.classList.contains('card-img-wrapper'):
  //     console.log('none of your business, go click somewhere else! :P');

  //   case !e.target.classList.contains('img-fluid'):
  //     console.log('none of your business, go click somewhere else! :P');

  //   case !e.target.classList.contains('card-title-custom'):
  //     console.log('none of your business, go click somewhere else! :P');

  //   case !e.target.classList.contains('card-text-custom'):
  //     console.log('none of your business, go click somewhere else! :P');

  //   case !e.target.classList.contains('card-body-custom'):
  //     console.log('none of your business, go click somewhere else! :P');
  // }
  console.log('hi');
  const card = e.target.closest('.card-custom');
  const title = card.querySelector('.card-title-custom').innerText;
  const img = card.querySelector('img');
  const url = img.src;
  console.log(title);
  console.log(url);
  showAlbumPage(url, title);
}
