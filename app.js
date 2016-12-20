// When page loads, display all avaiable lots
// and all available cars.
// Also, the buttons for lots need to have event listeners.



window.addEventListener('load', function(){
    getLots();
    loadCars(fleet);

    let lot0Btn = document.querySelector('#lot0btn');
    lot0Btn.addEventListener('click', carToLot);

    let lot1Btn = document.querySelector('#lot1btn');
    lot1Btn.addEventListener('click', carToLot);

    let lot2Btn = document.querySelector('#lot2btn');
    lot2Btn.addEventListener('click', carToLot);

    let lot3Btn = document.querySelector('#lot3btn');
    lot3Btn.addEventListener('click', carToLot);

    // Below is code if you want to allow user to create car on page

    // let submitBtn = document.querySelector('#submitUser');
    // submitBtn.addEventListener('click', addUser);


})

function makeCar(make, model, size, money){
    return{
        make: make,
        model: model,
        size: size,
        money: money,
    }
}

let fleet = [
    
    makeCar('Honda', 'Odyssey', 3, 100),
    makeCar('Tesla', 'ModelX', 1, 1000),
    makeCar('Ford', 'Expedition', 4, 500),
    makeCar('Ford', 'Pinto', 1, 10),
    makeCar('Chevrolet', 'Suburban', 4, 200)
     ];

    console.log (fleet);

    

function loadCars(cars){
    for (let i=0; i<cars.length; i++){
    
        let parent = document.querySelector('#vehicles');
        let oneCar = document.createElement('li');

        parent.appendChild(oneCar);
        
        let brand = document.createElement('h2');
        brand.textContent = cars[i].make;
        oneCar.appendChild(brand);

        let type = document.createElement('h2');
        type.textContent = cars[i].model;
        oneCar.appendChild(type);

        let spaces = document.createElement('p');
        spaces.textContent = "Size: " + cars[i].size;
        oneCar.appendChild(spaces);

        let cost = document.createElement('p');
        cost.textContent = "Money: $" + cars[i].money;
        oneCar.appendChild(cost);

        let lot0Btn = document.createElement('button');
        lot0Btn.textContent = "Add to Lot 0";
        lot0Btn.setAttribute('id', 'lot0');
        oneCar.appendChild(lot0Btn);

        let lot1Btn = document.createElement('button');
        lot1Btn.textContent = "Add to Lot 1";
        lot1Btn.setAttribute('id', 'lot1');
        oneCar.appendChild(lot1Btn);

        let lot2Btn = document.createElement('button');
        lot2Btn.textContent = "Add to Lot 2";
        lot2Btn.setAttribute('id', 'lot2');
        oneCar.appendChild(lot2Btn);

        let lot3Btn = document.createElement('button');
        lot3Btn.textContent = "Add to Lot 3";
        lot3Btn.setAttribute('id', 'lot3');
        oneCar.appendChild(lot3Btn);

    }
// return console.log(loadCars(cars));

}



    


// This is a GET api to the backend url

function getLots(){
    let request = new XMLHttpRequest();
    request.open('GET', 'url');
    request.addEventListener('load', function(){
        let response= JSON.parse(request.responseText);

        for(let i=0; i < response.lots; i++){
            let lot = response.lots[i];
            showLots();

        }
    })

    request.send();
}

function showLots(input){
    let lot = document.createElement('li');

    let parent = document.querySelector('#lots');
    parent.appendChild(lot);

    let lotID = document.createElement('h1');
    lot.appendChild(lotID);
    lotID.textContent = "Lot " + input.lotNumber;

    let lotCost = document.createElement('p');
    lot.appendChild(lotCost);
    lotCost.textContent = "Cost:  $" + input.cost + "/space";

    let lotCapacity = document.createElement ('p');
    lot.appendChild(lotCapacity);
    lotCapacity.textContent = "Capacity:  " + input.parkedCars +  " / " + input.lotcapacity;

    let lotCars = document.createElement('h2');
    lot.appendChild(lotCars);
    lotCars.textContent = input.parkedcars;

    // All of above is from parsed data in api.  variable names will have
    // to change based on names agreed upon for the api.  Not sure if cars 
    // already parked in lot will come back as an array that will have to be looped.

};

// This is a POST api to the backend url
function carToLot(){



}


// Was trying to figure out how to create cards on the web page

// function addUser(){
//     let user = {
//         make: document.querySelector('#brand').value,
//         model: document.querySelector('#kind').value,
//         spaces: document.querySelector('#size').value,
//         money:document.querySelector('#cash').value,
//     };

//     let parent = document.querySelector('#vehicles');
//     let user.make= document.querySelector('#')
// }