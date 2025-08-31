const countriesContainer = document.querySelector('.card-div');


fetch('https://raw.githubusercontent.com/KirtanCoder/port/refs/heads/main/data.json').then((res)=>res.json())
.then((data)=> {
    data.forEach((country) => {


        console.log(country);

  const countryCard = document.createElement('a');
countryCard.classList.add('country-card'); 
countryCard.href =`/country.html?name=${country.name}`

// add card content
const cardHTML = `
  <img src="${country.flag}" alt="India">

  <div class="card-details">
    <h2>${country.name}</h2>
    <p><b>Population:</b> ${country.population.toLocaleString('en-IN')}</p>
    <p><b>Region:</b> ${country.region}</p>
    <p><b>Capital:</b> ${(country.capital)}</p>
  </div>
`


countryCard.innerHTML = cardHTML;


countriesContainer.append(countryCard);
    });
})



