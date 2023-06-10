const apiKey = '96b1d7ec940dc2503dd561efcb8c9cdc';
const baseUrl = 'https://api.themoviedb.org/3';

function dataprint() {
    const allcards = document.getElementsByClassName("allcards");
    const rightbar = document.getElementsByClassName("rightbar");

    fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            allcards.innerHTML = null;  

            data.results.forEach(movie => {
                const card = document.createElement("div");
                card.classList.add("card");

                const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

                const cardtitle = document.createElement("div");
                cardtitle.setAttribute("class", "card-title");
                cardtitle.innerText = movie.title;
                card.append(cardtitle);


                const cardimg = document.createElement("div");
                cardimg.setAttribute("class", "cardimg");
                cardimg.innerHTML = `<img src="${imageUrl}" alt="" srcset="">`;
                card.append(cardimg);

                allcards.appendChild(card);
                rightbar.appendChild(allcards);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

dataprint();