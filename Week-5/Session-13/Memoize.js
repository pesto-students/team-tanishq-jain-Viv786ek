function geTtemperatureForCity(){

    const cache = {};
    
    return function (place){
        if(cache[place]){
            return `${cache[place]} (retrived the data)`;
        }
        const temp = cache[place] = temperatureData[place];
        return temp;
    }
    }
    
    const temperatureData = {
      "New York": 20,
      "London": 18,
      "Paris": 22,
      "Tokyo": 25,
      "Sydney": 28,
    };
    
    const temperature = geTtemperatureForCity();
    
    console.log(temperature("London"));
    console.log(temperature("London"));
    console.log(temperature("Tokyo"));
    console.log(temperature("Tokyo"));

//Output
// 18
// 18 (retrived the data)
// 25
// 25 (retrived the data)