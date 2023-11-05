let numero_pokemon = document.getElementById("numero_pokemon");
generar = () =>{
  for(let i = 0; i < numero_pokemon.value; i++){
      let num_random = Math.floor(Math.random() * 1250)
      let url_random = `https://pokeapi.co/api/v2/pokemon/?offset=${String(num_random)}&limit=20`
      document.getElementById("body").innerHTML+= `<div id="${i}"></div>`
      axios.get(url_random).then((response) => {
          let data = response.data;
          data= data.results[Math.floor(Math.random() * 20)]
          
          let nombre = data.name
          axios.get(data.url).then((response) =>{
              console.log(response)
              let photo = response.data.sprites.front_default
              document.getElementById(String(i)).innerHTML += `<img src="${photo}">`
              document.getElementById(String(i)).innerHTML += `<h2>${nombre}</h2>`
              document.getElementById(String(i)).innerHTML += `<ul id="${i}e"></ul>`
              for(let j = 0; j < response.data.types.length; j++){
                document.getElementById(String(i)+"e").innerHTML +=`<li>${response.data.types[j].type.name}</li>`
              }
              
              document.getElementById(String(i)).innerHTML += `<ul id="${i}j"></ul>`
              for(let j = 0; j < 4; j++){
                document.getElementById(String(i)+"j").innerHTML += `<li>${response.data.moves[Math.floor(Math.random() * response.data.moves.length)].move.name}</li>`
          }})})}}