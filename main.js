let url = "https://rickandmortyapi.com/api/character";
let div = document.getElementById("div");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

  
    
    data.results.map((e) => {
      let r=document.createElement("div")
      let c=r.classList="div2"
    
      let p = document.createElement("p");
      p.textContent = e.name;

      let img = document.createElement("img");
      img.src = e.image;
    r.appendChild(p);
    r.appendChild(img);
    div.appendChild(r)
     
    });
  })