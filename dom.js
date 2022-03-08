
// const flag=document.createElement("img")
// flag.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png"
// flag.setAttribute("class","flag")
// document.body.append(flag)

// const countryName=document.createElement("h2")
// countryName.innerText="German";

// const population=document.createElement("p")
// population.innerText="Population:84236432"



// const region=document.createElement("p")
// region.innerText="Region:europe"


// const capital=document.createElement("p")
// capital.innerText="Capital:Berlin"

// document.body.append(flag,countryName,population,region,capital)


let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    }
  ];
  



// function createCountry(){
    
// const container=document.createElement("div")
// container.setAttribute("class","container")
// container.innerHTML= ` <img class="flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png" alt="">
// <div class="info">
//     <h2>german</h2>
//     <p>population:<span>84465</span></p>
//     <p>Region:<span>Europ</span></p>
//     <p>Capital:<span>Berlin</span></p>`;
// document.body.append(container)
// }
// countriesInfo.forEach(country=>createCountry());


//

// function createCountry(e){
    
//     const container=document.createElement("div")
//     container.setAttribute("class","container")
//     container.innerHTML= ` <img class="flag" src=${e.flag}>
//     <div class="info">
//         <h2>${e.name}</h2>
//         <p>population:<span>${e.population}</span></p>
//         <p>Region:<span>${e.region}</span></p>
//         <p>Capital:<span>${e.capital}</span></p>`;
//     document.body.append(container)
//     }
//  countriesInfo.forEach(e=>createCountry(e));
    
    
    
// using object destructuring

//  function createCountry(e){
//     const {name,population,region,capital,flag}=e
//     const container=document.createElement("div")
//     container.setAttribute("class","container")
//     container.innerHTML= ` <img class="flag" src=${flag}>
//     <div class="info">
//         <h2>${name}</h2>
//         <p>population:<span>${population}</span></p>
//         <p>Region:<span>${region}</span></p>
//         <p>Capital:<span>${capital}</span></p>`;
//     document.body.append(container)
//     }
//  countriesInfo.forEach(e=>createCountry(e));
    

 




function createCountry({name,flag,population,region,capital}){

    const container=document.createElement("div")
    container.setAttribute("class","container")
    // console.log(country);
    container.innerHTML=`<img class="flag" src="${flag}">
    <div class="info">
        <h2>${name}</h2>
        <p><span>Population</span>${population}</p>
        <p><span>Region</span>${region}</p>
        <p><span>Capital</span>${capital}</p>
    </div>`
    
    }  
 document.body.append(container);