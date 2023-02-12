const movie = [
    {
    title: "The Shawshank Redemption",
  },
  {
    title: "The Godfather",
  },
  {title: "The Dark Knight",},
  {
    title: "12 Angry Men",
  },
  {
    title: "The Lord Of The Rings",
  },
  {
    title: "Pulp Fiction",
  },
  {
    title: "The Good, the Bad and the Ugly",
  },
  {
    title: "Forrest Gump",
  }
]

for (let j = 0; j < movie.length; j++){

    console.log(movie[j]);
    
    }

   
    let movieList = [
        "The Shawshank Redemption",
        "The Godfather",
        "The Dark Knight",
        "12 Angry Men",
        "The Lord Of The Rings",
        "Pulp Fiction",
        "The Good, the Bad and the Ugly",
        "Forrest Gump"
    ]

    for (let j = 0; j < movieList.length; j++){

        console.log(movieList[j]); 
        }

    let counter = 0;

        for (let elem of movieList) {
            if (elem == 'a') {
                counter++;
            }
        }
        
        console.log(counter);

let btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);
text = document.querySelector('.text');
text.innerHTML = "Javascript test";

btn.addEventListener('click', start);

   