const countryName = new URLSearchParams(location.search).get('name');
console.log("Query param name:", countryName);

const information = document.querySelector('.love');
const imgContainer = document.querySelector('.img-container img');

fetch('https://raw.githubusercontent.com/KirtanCoder/port/refs/heads/main/data.json')
  .then((res) => res.json())
  .then((data) => {
    // Ek hi country ka data filter karo
    const countryData = data.find(
      (country) => country.name.toLowerCase() === countryName.toLowerCase()
    );

    if (!countryData) {
      console.log("Country not found!");
      information.innerHTML = `<p>Country not found!</p>`;
      return;
    }

    console.log("Matched country:", countryData);

    // Flag set karo
    imgContainer.src = countryData.flag;

    // Info prepare karo
    const info = `
      <p><b>${countryData.name}</b></p>
      <div class="country-info">
        <p><b>Native Name:</b> ${countryData.nativeName}</p>
        <p><b>Population:</b> ${countryData.population.toLocaleString('en-IN')}</p>
        <p><b>Region:</b> ${countryData.region}</p>
        <p><b>Sub Region:</b> ${countryData.subregion}</p>
        <p><b>Capital:</b> ${countryData.capital || 'N/A'}</p>
        <p><b>Top-Level Domain:</b> ${countryData.topLevelDomain?.join(', ') || 'N/A'}</p>
        <p><b>Currencies:</b> ${countryData.currencies?.map(c => c.name).join(', ') || 'N/A'}</p>
        <p><b>Languages:</b> ${countryData.languages?.map(l => l.name).join(', ') || 'N/A'}</p>
      </div>
    `;

    // String ko DOM me daalo
    information.insertAdjacentHTML('beforeend', info);
  })
  .catch(err => console.error("Error fetching data:", err));
