function showSearchPage() {
  jsEntryPoint.innerHTML = `
  <section class="cards-section mb-5">
  <h4 class="text-white font-weight-bold mb-3 display-5 pl-5">Brows All</h4>
  <div class="d-flex flex-wrap col-lg-12 col-md-10 row-albums mb-4 justify-content-center">
      ${searchDatas
        .map(
          (searchDatas) => `
           <div class="px-2 mb-3 row-albums align-items-stretch" >
              <div class="card-custom rounded shadow overflow-hidden cardMobile" style = "background-color:${searchDatas.color} ; style = "position: relative">
                <div class="card-image-wrapper d-flex flex-column p-2 ">
                <div class="card-body-custom p-3">
                  <h6 class="card-title-custom text-white text-truncate cardTextMobile" style= "font-size: 0.9rem;">${searchDatas.title}</h6>
                  <img src="${searchDatas.url}" class="img-fluid rounded mt-5 ml-4" style = "
                  overflow:hidden;
                  cursor: wait;    
                  transform: rotate( 25deg) translate(18%,-10%);
                  " alt="" />
                </div>
                  
                </div>
              </div>
            </div>
      `
        )
        .join('')}
  </div>
</section>
  `;
}
