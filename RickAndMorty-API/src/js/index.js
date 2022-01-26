
const API = "https://rickandmortyapi.com/api/character";
const cardContainer = document.getElementById("cards-container");
let j = 0;
const getData = async (page) =>{
    try{
        const data = await fetchData(`${API}?page=${page}`);
        data.results.map(character =>{
            const card = cardConstructor(character, j++);
            cardContainer.appendChild(card);
        });
    }catch(err){
        console.error(err);
    }
}


(function() {
    for (let i = 1; i <= 42; i++) {
        getData(i);
    }
})();
