
const cardConstructor = character =>{
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `

    
    <article class = "card-container">
        <div class="card-content">
            <div class = "card-title">
                <h3><span>${j}</span> ${character.name}</h3>
            </div>
            <div class = "card-img">
                <img src="${character.image}" alt="">
                <div class = "card-status-container">
                    <p class = "card-status status-${character.status}">${character.status}</p>
                </div>
            </div>
            <div class = "card-info">
                <p><i class="fas fa-atom"></i>Specie: <span>${character.species}</span></p>
                <p><i class="fas fa-venus-mars"></i>Gender: <span>${character.gender}</span></p>
                <p><i class="fas fa-globe"></i></i>Birthplace: <span>${character.origin.name}</span></p>
                <p><i class="fas fa-map-marker-alt"></i>Last location: <span>${character.location.name}</span></p>
            </div>
        </div>
      </article>
    
    `;
    return card;
}
