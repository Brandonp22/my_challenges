
const cardConstructor = character =>{
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `

    
    <article>
      <div>
          <h3><span>${j}</span> ${character.name}</h3>
          <span>${character.status}</span>
      </div>
      <div>
          <img src="${character.image}" alt="">
      </div>
      <div>
          <p>Especie: <span>${character.species}</span> </p>
          <p>${character.gender}</p>
          <p>${character.origin.name}</p>
          <p>${character.location.name}</p>
      </div>
    </article>
    
    `;
    return card;
}
