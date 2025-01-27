document.getElementById("header").innerText = "Weather Alert App";
document.getElementById("greetingResult").innerText = "Welcome to the most accurate weather app!";

// Navigation service is responsible for everything connected to the navigation on our app. This is why we keep all the properties and methods here
// we want everything that is connected to the navigation to be in one place
let navigationService = {
    navItems:document.getElementsByClassName("nav-item"),
    pages: document.getElementsByClassName("page"),
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
    }
}
// calling the function of the object to tell the listener to start listening
navigationService.registerEventListeners();


let weatherApiService = {
    apiKey: "77ffacd3fe18991f73a7bcc19ac32745",
    getWeatherData: function(city){
        fetch(` https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${this.apiKey}`)
        .then(function(response){
            response.json()
            .then(function(data)
            {console.log(data);
            })
            .catch(function(errorParse){
                console.log(errorParse);
                
            })

        })
        .catch(function(error){
            console.log(error);
            
        })

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
    }
}
uiService.showAboutInfo();
weatherApiService.getWeatherData("Skopje");