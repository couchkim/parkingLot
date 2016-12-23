// When page loads, display all available lots
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
        lot1Btn.addEventListener('click', function(){
            carToLot(1, cars[i]);
        });

        let lot2Btn = document.createElement('button');
        lot2Btn.textContent = "Add to Lot 2";
        lot2Btn.setAttribute('id', 'lot2btn');
        oneCar.appendChild(lot2Btn);
        lot2Btn.addEventListener('click', function(){
            carToLot(2, cars[i]);
        });


        let lot3Btn = document.createElement('button');
        lot3Btn.textContent = "Add to Lot 3";
        lot3Btn.setAttribute('id', 'lot3btn');
        oneCar.appendChild(lot3Btn);
        lot3Btn.addEventListener('click', function(){
            carToLot(3, cars[i]);
        });


        let lot4Btn = document.createElement('button');
        lot4Btn.textContent = "Add to Lot 4";
        lot4Btn.setAttribute('id', 'lot4btn');
        oneCar.appendChild(lot4Btn);
        lot4Btn.addEventListener('click', function(){
            carToLot(4, cars[i]);
        });
    }
}


// This is a GET api to the backend url

function getLots(){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://still-coast-76678.herokuapp.com/lots');
    request.addEventListener('load', function(){
        let response= JSON.parse(request.responseText);

        for(let i=0; i < response.length; i++){
            let lot = response[i];
            showLots(lot);
            console.log('hello');
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
    lotCapacity.textContent = "Capacity:  " + input.vehicle.length +  " / " + input.capacity;

    let lotCars = document.createElement('h2');
    for (let i=0; i<input.vehicle.length; i++){
        let list = input.vehicle[i].make + ' ' + input.vehicle[i].model;
         lotCars.textContent = list;
         
        lot.appendChild(lotCars);
    }
};

// This is a POST api to the backend url


function carToLot(lot, car){
    
    
    let request = new XMLHttpRequest;
    request.open('POST', 'https://still-coast-76678.herokuapp.com/parkCar');
    let body = JSON.stringify({
        make: car.make,
        model: car.model,
        size: car.size,
        id: lot,

    })

request.send(body);

}

// Could add a function that says:
    // if $ >= (lotCost x spaces) && (lotCapacity-spacesfilled >= size)
    // then, submit and post AND
    // reduct the $ by (lotCost x spaces)
    