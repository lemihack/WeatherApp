
//API from https://www.developer.accuweather.com
const key = 'BHJZVeiEt2WBGH42HPot5SmGvHG2fwaA';



const getWeather = async id => {

    const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const queryParam = `${id}?apikey=${key}`;

    const response = await fetch(baseUrl + queryParam);
    const data = await response.json();
    return data[0];

}


const getCity = async city => {


    baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    queryParam = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseUrl + queryParam);
    const data = await response.json();
    return data[0];
}

// getCity('china')
// .then(data => {
//     return getWeather(data.Key)
// }).then( data =>{
//     console.log(data);
    
// })
// .catch(err => console.log(err))