//VAR

const apiKey = "6e496b0c0a1d24da18427ab07fb3e8bd";
const apiCountryUrl = "https://flagcdn.com/"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityName = document.querySelector("#city");
const temp = document.querySelector("#temperatura");
const clima = document.querySelector("#clima");
const climaIcon = document.querySelector("#icone-clima");
const countryFlag = document.querySelector("#country");
const umidade = document.querySelector("#umidade");
const windSpeed = document.querySelector("#vento");

const barra_pesquisa = document.querySelector("#barra_pesquisa");
const container = document.querySelector("#container")

// Funções
const consultarDadosAPI = async(city) =>{
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    
    const res = await fetch(apiURL);
    const data = await res.json();

    return data;
};

const attInformacoes =  async (city) => {
    const data = await consultarDadosAPI(city);

    cityName.innerHTML = data.name;
    temp.innerHTML = parseInt(data.main.temp);
    clima.innerHTML = data.weather[0].description;  
    climaIcon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    countryFlag.setAttribute("src", `https://flagcdn.com/w80/${data.sys.country.toLowerCase()}.png`);
    umidade.innerHTML = data.main.humidity+"%";
    windSpeed.innerHTML = data.wind.speed+" km/h";

    barra_pesquisa.classList.remove();
    barra_pesquisa.classList = "pesquisa-local";

    container.classList.remove();
    container.classList = "container";
}; 

// Eventos

searchBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const city = cityInput.value;

    attInformacoes(city);
})

