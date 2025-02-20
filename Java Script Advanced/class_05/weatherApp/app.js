document.getElementById("header").innerText = "Weather Alert App";
document.getElementById("greetingResult").innerText = "Welcome to the most accurate weather app!";

//navigation service is responsible for everything connected to the navigation of our app. This is why we keep all the properties and methods here
//we want everything that is connected to the navigation to be in one place
let navigationService = {
    navItems: document.getElementsByClassName("nav-item"),
    pages: document.getElementsByClassName("page"),
    citySearchBtn: document.getElementById("citySearchBtn"),
    citySearchInput: document.getElementById("citySearchInput"),
    activateItem: function(item){
        for(let navItem of this.navItems){
            navItem.classList.remove("active");
        }
        item.classList.add("active");
    },
    displayPage: function(index){
        for(let page of this.pages){
            page.style.display="none";
        }
        this.pages[index].style.display="block";
    },
    registerEventListeners: function(){
        for(let i=0; i<this.navItems.length;i++){
            this.navItems[i].addEventListener("click", function(){
                navigationService.activateItem(this); //this=> target of the event in our case navItems[i]
                navigationService.displayPage(i);
            })
        }

        this.citySearchBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevents form submission and lots of headaches.It was causing page reload and disruption of data display on the page
            console.log(`Search input: ${navigationService.citySearchInput.value}`);
            if (navigationService.citySearchInput.value) { //it will only make the call if there is a value entered in the field
                weatherApiService.getWeatherData(navigationService.citySearchInput.value);
            }
        })
    }
}
navigationService.registerEventListeners(); //we need to call the function of the object to tell the listener to start listening

let weatherApiService = {
    apiKey: "31b3375edaaf1a0b94cb96483eb94296",
    getWeatherData: async function(city){
        // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${this.apiKey}`) //promise
        // .then(function(response){ //response is a complex Response that contains the content itself
        //     response.json() //promise
        //     .then(function(data){
        //         console.log(data); //here we have the js objects 
        //     })
        //     .catch(function(errorParse){
        //         console.log(errorParse);
        //     })

        // })
        // .catch(function(error){
        //     console.log(error);
        // })

        try {
            debugger
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${this.apiKey}`
            let response = await fetch(url); //we need to wait for the response from this fetch so that we can continue with our logic in the try block
            if (!response.ok) { 
                let errorMessage;
                //switch - for easier adding of new cases
                switch (response.status) {
                    case 404:
                        errorMessage = "City not found. Please check the city name and try again.";
                        break;
                    case 401:
                        errorMessage = "Invalid API key. Please check your API key and try again.";
                        break;
                    case 429:
                        errorMessage = "Request limit reached. Please try again later.";
                        break;
                    default:
                        errorMessage = `An error occurred: ${response.status} ${response.statusText}`;
                }
                throw new Error(errorMessage); 
            }
            let data = await response.json();
            console.log(data);
            let statisticsData = statisticsService.calculateStatistics(data);
            uiService.displayStatistics(statisticsData);
            uiService.displayHourlyData(data.list);
            uiService.displaySuggestion(data.list);
            uiService.clearErrorMessage();
        } catch (error) {
            console.log("An error occurred!", error);
            uiService.showErrorMessage(error.message);
        }
    }
}

let statisticsService = {
    calculateStatistics: function(data){
        debugger
        //initial values are always set before the iteration of the elements
        // let tempSum = 0;
        // let humiditySum = 0;
        // let minTemp = data.list[0].main.temp;
        // let maxTemp = data.list[0].main.temp;
        // let minHumidiy = data.list[0].main.humidity;
        // let maxHumidiy = data.list[0].main.humidity;

        // for(let listItem of data.list){
        //     tempSum += listItem.main.temp;
        //     humiditySum += listItem.main.humidity;

        //     if(listItem.main.temp < minTemp){ //if the list item temp is smaller than the current value of minTemp, our list item temp should be the new value of minTemp
        //         minTemp = listItem.main.temp
        //     }

        //     if(listItem.main.temp > maxTemp){ //if the list item temp is larger than the current value of maxTemp, our list item temp should be the new value of maxTemp
        //         maxTemp = listItem.main.temp;
        //     }

        //     if(listItem.main.humidity < minHumidiy){
        //         minHumidiy = listItem.main.humidity;
        //     }

        //     if(listItem.main.humidity > maxHumidiy){
        //         maxHumidiy = listItem.main.humidity;
        //     }
        // }

        // let avgTemp = tempSum/data.list.length;
        // let avgHumidity = humiditySum/data.list.length;

        // let result = {
        //     averageTemperature: avgTemp,
        //     averageHumidity : avgHumidity,
        //     minTemperature: minTemp,
        //     maxTemperature: maxTemp,
        //     minHumidity: minHumidiy,
        //     maxHumidiy: maxHumidiy
        // };
        // return result;

        let initialValues = {
         tempSum : 0,
         humiditySum : 0,
         minTemp : data.list[0].main.temp,
         maxTemp : data.list[0].main.temp,
         minHumidiy : data.list[0].main.humidity,
         maxHumidiy : data.list[0].main.humidity,
        }
                                    
        //in result - initialValues is passed, and in item the current item from data.list
        let res = data.list.reduce(function(result, item){
          result.tempSum += item.main.temp;
          result.humiditySum += item.main.humidity;

          if(item.main.temp < result.minTemp){
            result.minTemp = item.main.temp;
          }

          if(item.main.temp > result.maxTemp){
            result.maxTemp = item.main.temp;
          }

          if(item.main.humidity < result.minHumidity){
            result.minHumidity = item.main.humidity;
          }

          if(item.main.humidity > result.maxHumidiy){
            result.maxHumidiy = item.main.humidity;
          }

          return result;
        }, initialValues);

        //initialValues is the object which we use as inital value for reduce
        //it is being passed in each iteration of reduce
        //in each iteration the values of the initialValues properties can change
        //at the end we have sums and mins and maxs in initialValues properties
        //initialValues is passed by reference in each iteration as the result param
        //so when we change the values of the result properties, the values of the properties of initialValues 
        //are changed and affected as well
        console.log(initialValues);
        console.log(res);

        //here we make an object that contains the six result values that we need for our home page
        let statisticsResult ={
            averageTemperature: (initialValues.tempSum / data.list.length).toFixed(3),
            averageHumidity : initialValues.humiditySum / data.list.length,
            minTemperature: initialValues.minTemp,
            maxTemperature: initialValues.maxTemp,
            minHumidity: initialValues.minHumidiy,
            maxHumidiy: initialValues.maxHumidiy
        }

        return statisticsResult;
    }
}


let aboutInfo = {
    creator: "LJubisha Milosov - G6",
    academy: "Qinshift Academy",
    year: 2025
}
//the uiService contains the logic about everyhing that needs to be shown on the user interface (ui)
let uiService = {
    showAboutInfo: function(){
        document.getElementById("aboutResult").innerHTML=`<h2>This app is created by ${aboutInfo.creator} from the ${aboutInfo.academy}</h2>
        <p><b>${aboutInfo.year}</b></p>`
    },
    displayStatistics: function(statisticsData){
        document.getElementById("statisticsResult").innerHTML = "";
        document.getElementById("statisticsResult").innerHTML = `
        <div class="container statistics-background"> <!-- Added class for background -->
            <div class="row">
                <div class="col-6">AVG TEMP: ${statisticsData.averageTemperature} C</div>
                <div class="col-6">AVG HUMIDITY: ${statisticsData.averageHumidity} %</div>
            </div>
             <div class="row">
                <div class="col-6">MIN TEMP: ${statisticsData.minTemperature} C</div>
                <div class="col-6">MIN HUMIDITY: ${statisticsData.minHumidity} %</div>
            </div>
            <div class="row">
                <div class="col-6">MAX TEMP: ${statisticsData.maxTemperature} C</div>
                <div class="col-6">MAX HUMIDITY: ${statisticsData.maxHumidiy} %</div>
            </div>
        </div>`
    },
    displayHourlyData: function(hourlyData){
        let table = `<table class="table">
            <thead>
                <tr>
                    <th>Icon</th>
                    <th>Description</th>
                    <th>Date & Time</th>
                    <th>Temperature (℃)</th>
                    <th>Humidity (%)</th>
                    <th>Wind Speed (m/s)</th>
                </tr>
            </thead>
            <tbody>`;
        
        hourlyData.forEach(item => {
            table += `<tr>
                <td><img src="http://openweathermap.org/img/w/${item.weather[0].icon}.png" alt="weather icon"></td>
                <td>${item.weather[0].description}</td>
                <td>${item.dt_txt}</td>
                <td>${item.main.temp}</td>
                <td>${item.main.humidity}</td>
                <td>${item.wind.speed}</td>
            </tr>`;
        });

        table += `</tbody></table>`;
        document.getElementById("hourlyTableResult").innerHTML = table;

        // Add sorting functionality
        document.querySelectorAll(".table th").forEach(header => {
            header.addEventListener("click", () => {
                let tableElement = header.parentElement.parentElement.parentElement;
                let rows = Array.from(tableElement.querySelectorAll("tbody tr"));
                let index = Array.from(header.parentElement.children).indexOf(header);
                let ascending = header.classList.contains("asc");
                rows.sort((a, b) => {
                    let aText = a.children[index].innerText;
                    let bText = b.children[index].innerText;
                    return ascending ? aText.localeCompare(bText) : bText.localeCompare(aText);
                });
                header.classList.toggle("asc", !ascending);
                header.classList.toggle("desc", ascending);
                header.innerHTML = header.innerHTML.replace(/ ASC| DESC/, '') + (ascending ? ' DESC' : ' ASC');
                rows.forEach(row => tableElement.querySelector("tbody").appendChild(row));
            });
        });
    },
    displaySuggestion: function(hourlyData){
        console.log("Displaying Suggestion:", hourlyData);
        const suggestionElement = document.getElementById("suggestionResult");
        if (suggestionElement) {
            let bestTime = hourlyData.reduce((best, item) => {
                if (!best || (item.main.temp >= 20 && item.main.temp <= 25 && item.main.humidity >= 40 && item.main.humidity <= 60)) {
                    return item;
                }
                return best;
            }, null);

            if (bestTime) {
                suggestionElement.innerHTML = `
                <div class="container">
                    <div class="row">
                        <div class="col-12">Best Time: ${bestTime.dt_txt}</div>
                    </div>
                    <div class="row">
                        <div class="col-6">Temperature: ${bestTime.main.temp} C</div>
                        <div class="col-6">Humidity: ${bestTime.main.humidity} %</div>
                    </div>
                </div>`;
            } else {
                suggestionElement.innerHTML = "<p>No suitable time found in the next few days.</p>";
            }
        } else {
            console.error("Element with ID 'suggestionResult' not found.");
        }
    },
    showErrorMessage: function(message){
        console.log("Showing Error Message:", message);
        const errorElement = document.getElementById("errorResult");
        if (errorElement) {
            errorElement.innerHTML = `<p class="text-danger">${message}</p>`;
        } else {
            console.error("Element with ID 'errorResult' not found.");
        }
    },
    clearErrorMessage: function() {
        const errorElement = document.getElementById("errorResult");
        if (errorElement) {
            errorElement.innerHTML = "";
        }
    }
}

uiService.showAboutInfo();
weatherApiService.getWeatherData("Skopje");
console.log("Test");