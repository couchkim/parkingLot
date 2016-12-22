// When page loads, display all avaiable lots
// and all available cars.
// Also, the buttons for lots need to have event listeners.



window.addEventListener('load', function(){
    
    let cars = [
    
    makeCar('Honda', 'Odyssey', 3, 100),
    makeCar('Tesla', 'ModelX', 1, 1000),
    makeCar('Ford', 'Expedition', 4, 500),
    makeCar('Ford', 'Pinto', 1, 10),
    makeCar('Chevrolet', 'Suburban', 4, 200),
    makeCar('Honda', 'Accord', 2, 50),
    makeCar('Mercedes', 'C200', 1, 100)
     ];

    console.log (cars);


    
    function makeCar(make, model, size, money){
    return{
        make: make,
        model: model,
        size: size,
        money: money,
    }
}

    
    getLots();
    loadCars(cars);


    let lot1Btn = document.querySelector('#lot1btn');
    lot1Btn.addEventListener('click', carToLot);

    let lot2Btn = document.querySelector('#lot2btn');
    lot2Btn.addEventListener('click', carToLot);

    let lot3Btn = document.querySelector('#lot3btn');
    lot3Btn.addEventListener('click', carToLot);

    let lot4Btn = document.querySelector('#lot4btn');
    lot4Btn.addEventListener('click', carToLot);

    // Below is code if you want to allow user to create car on page

    // let submitBtn = document.querySelector('#submitUser');
    // submitBtn.addEventListener('click', addUser);

    
    
})





    

function loadCars(cars){
    for (let i=0; i<cars.length; i++){
    
        let parent = document.querySelector('#vehicles');
        let oneCar = document.createElement('li');

        parent.appendChild(oneCar);
        
        let brand = document.createElement('h2');
        brand.textContent = cars[i].make;
        brand.setAttribute('id', 'brand');
        oneCar.appendChild(brand);

        let type = document.createElement('h2');
        type.textContent = cars[i].model;
        type.setAttribute('id', 'type');
        oneCar.appendChild(type);

        let spaces = document.createElement('p');
        spaces.textContent = "Size: " + cars[i].size;
        spaces.setAttribute('id', 'spaces');
        oneCar.appendChild(spaces);

        let cost = document.createElement('p');
        cost.textContent = "Money: $" + cars[i].money;
        oneCar.appendChild(cost);

        let lot1Btn = document.createElement('button');
        lot1Btn.textContent = "Add to Lot 1";
        lot1Btn.setAttribute('id', 'lot1btn');
        oneCar.appendChild(lot1Btn);

        let lot2Btn = document.createElement('button');
        lot2Btn.textContent = "Add to Lot 2";
        lot2Btn.setAttribute('id', 'lot2btn');
        oneCar.appendChild(lot2Btn);

        let lot3Btn = document.createElement('button');
        lot3Btn.textContent = "Add to Lot 3";
        lot3Btn.setAttribute('id', 'lot3btn');
        oneCar.appendChild(lot3Btn);

        let lot4Btn = document.createElement('button');
        lot4Btn.textContent = "Add to Lot 4";
        lot4Btn.setAttribute('id', 'lot4btn');
        oneCar.appendChild(lot4Btn);


    }

}



    


// This is a GET api to the backend url

function getLots(){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://still-coast-76678.herokuapp.com/lots');
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
    lotID.textContent = "Lot " + input.id;

    let lotCost = document.createElement('p');
    lot.appendChild(lotCost);
    lotCost.textContent = "Cost:  $" + input.rate + "/space";

    let lotCapacity = document.createElement ('p');
    lot.appendChild(lotCapacity);
    lotCapacity.textContent = "Capacity:  " + input.vehicles.length +  " / " + input.capacity;

    let lotCars = document.createElement('h2');
    lot.appendChild(lotCars);
    for (let i=0; i<input.vehicles.length; i++){
        let list = input.vehicles[i].make + ' ' + input.vehicles[i].model;
    }
    
    lotCars.textContent = list;

    // All of above is from parsed data in api.  variable names will have
    // to change based on names agreed upon for the api.  Not sure if cars 
    // already parked in lot will come back as an array that will have to be looped.

};

// This is a POST api to the backend url
function carToLot(){
    let parkedCar = {

        // I'm not sure how to call the write lot id
        id: document.querySelector('#'),
        make: document.querySelector('#brand'),
        model: document.querySelector('#type'),
        size: document.querySelector('#spaces'),
        
    }
    
    
    
    let request = new XMLHttpRequest;
    request.open('POST', 'http://localhost:4567');
    let body = JSON.stringify({
        make: document.querySelector('#brand').value = '',
        model: document.querySelector('#type').value = '',
        size: document.querySelector('#spaces').value = '',
        id: document.querySelector('#').value = ''


    })



}


// Was trying to figure out how to create cars on the web page

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