document.getElementById("header").innerText = "Weather Alert App";
document.getElementById("greetingResult").innerText = "Welcome to the most accurate weather app!";

// Navigation service is responsible for everything connected to the navigation on our app. This is why we keep all the properties and methods here
// we want everything that is connected to the navigation to be in one place
let navigationService = {
    navItems:document.getElementsByClassName("nav-item"),
    pages: document.getElementsByClassName("page"),
    citySearchBtn: document.getElementById("citySearchBtn"),
    activateItem: function(item){
        for(let navItem of this.navItems){
            navItem.classList.remove("active");
        }
        item.classList.add("active");
    },
    displayPage: function(index){
        for(let page of this.pages){
            page.style.display = "none";
        }
        this.pages[index].style.display='block';
    },
    registerEventListeners: function(){
        // for (let navItem of this.navItems) {
        //     navItem.addEventListener("click", function() {
        //         navigationService.activateItem(this); 
        for(let i = 0; i < this.navItems.length; i++){
            this.navItems[i].addEventListener("click", function(){
                navigationService.activateItem(this)  // this -> target of the event in our case navItems[i]
                navigationService.displayPage(i);
            })
        }
        this.citySearchBtn.addEventListener("click", function(){
            console.log(`SearchInput ${navigationService.citySearchBtn.value}`);
            if(navigationService.citySearchBtn.value){
                weatherApiService.getWeatherData(navigationService.citySearchBtn.value);
            }
           
        })
    }
}
// calling the function of the object to tell the listener to start listening
navigationService.registerEventListeners();


let weatherApiService = {
    apiKey: "77ffacd3fe18991f73a7bcc19ac32745",
    getWeatherData: async function(city){

        // fetch(` https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${this.apiKey}`)
        // .then(function(response){
        //     response.json()
        //     .then(function(data)
        //     {console.log(data);
        //     })
        //     .catch(function(errorParse){
        //         console.log(errorParse);
                
        //     })

        // })
        // .catch(function(error){
        //     console.log(error);
            
        // })

        try{
            debugger
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${this.apiKey}`
            let response = await fetch(url); // we need to wait for the response from this fetch so that we can continue
            let data = await response.json();
            console.log(data);
            let statisticsData = statisticsService.calculateStatistics(data);

        } catch{
            console.log("An Error occured!");
            
        }

    }
}

let statisticsService = {
    calculateStatistics: function (data){
        //initial values are always set before the iteration
            let tempSum = 0;
            let humiditySum = 0;
            let minTemp = data.list[0].main.temp;
            let maxTemp = data.list[0].main.temp;
            let minHumidity = data.list[0].main.humidity;
            let maxHumidity = data.list[0].main.humidity;
        for(let listItem of data.list){
            tempSum += listItem.main.temp;
            humiditySum += listItem.main.humidity;

            if(listItem.main.temp < minTemp){ // if the list item temp is lower than the current value of minTemp..
                minTemp = listItem.main.temp;
            }

            if(listItem.main.temp > maxTemp){
                maxTemp = listItem.main.temp;
            }

            if(listItem.main.humidity < minHumidity){
                minHumidity = listItem.main.humidity;
            }

            if(listItem.main.humidity > maxHumidity){
                maxHumidity = listItem.main.humidity;
            }
        }
        let averageTemp = tempSum / data.list.length;
        let averageHumidity = humiditySum / data.list.length;

        let result = {
            avgTemperature : averageTemp,
            averageHumidity : averageHumidity,
            minTemperature : minTemp,
            maxTemperature : maxTemp, 
            minHumidity : minHumidity,
            maxHumidity : maxHumidity
        };
        return result;
    }
}


let aboutInfo = {
    creator: "Ljubisha Milosov",
    academy: "Qinshift",
    year: 2025
}

let uiService = {
    showAboutInfo: function(){
        document.getElementById("aboutResult").innerHTML = `<h2>This app is created by ${aboutInfo.creator} from the ${aboutInfo.academy} academy</h2>
        <p><b>${aboutInfo.year}</b></p>`
    },
    displayStatistics: function(statisticsData){
        document.getElementById("statisticsResult").innerHTML = "";
        document.getElementById("statisticsResult").innerHTML = `
        <div class="container">
        <div class="row">
        <div class="">AVG TEMP: ${statisticsData.averageTemp} C</div>
        <div class="">AVG TEMP: ${statisticsData.averageTemp} C</div`
    }
}

uiService.showAboutInfo();
weatherApiService.getWeatherData("Skopje");