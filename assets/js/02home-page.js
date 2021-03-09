// showHomePage function
function showHomePage() {
  jsEntryPoint.innerHTML = '';
  sectionsData.forEach((section, idx) => {
    const { sectionName, albums } = section;
    const sectionHTML = `
  <section id="section-${idx + 1}" class="cards-section mb-1 mb-md-5">
    <h4 class="section-name text-white font-weight-bold mb-2 display-5 pl-2">${sectionName}</h4>
    <div class="d-flex flex-md-wrap row-albums mb-1">
        ${albums
          .map(
            (album) => `
             <div class="px-2 mb-3">
                <div class="card-custom shadow animate__animated animate__faster">
                  <div class="card-image-wrapper d-flex flex-column p-2">
                    <img src="${album.coverUrl}" class="img-fluid rounded shadow-lg" alt="" />
                    <a href="#" class="card-play-btn align-self-end "><i class="fas fa-play-circle "></i></a>
                  </div>
                  <div class="card-body-custom px-2">
                    <h6 class="card-title-custom text-white text-truncate">${album.title}</h6>
                    <p class="card-text-custom text-muted">random text</p>
                  </div>
                </div>
              </div>
        `
          )
          .join('')}
    </div>
  </section>
  `;
    jsEntryPoint.insertAdjacentHTML('beforeend', sectionHTML);
  });
  const cards = document.querySelectorAll('.card-custom');
  cards.forEach((card) => {
    card.addEventListener('click', getCardsInfo);
    card.classList.remove('animate__fadeInUp');
    card.classList.add('animate__fadeInUp');
  });
}
