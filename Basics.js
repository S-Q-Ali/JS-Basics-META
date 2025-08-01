// class Bird {
//     useWings() {
//         console.log("Flying!");
//     }
// }
// class Eagle extends Bird {
//     useWings() {
//         super.useWings();
//         console.log("Barely flapping!");
//     }
// }
// class Penguin extends Bird {
//     useWings() {
//         console.log("Diving!");
//     }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"

// console.log("abcd".match(/d/));

// class Train {
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
//     toggleLights() {
//         this.lightsOn = !this.lightsOn;
//     }
//     lightsStatus() {
//         console.log('Lights on?', this.lightsOn);
//     }
//     getSelf() {
//         console.log(this);
//     }
//     getPrototype() {
//         var proto = Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }

// class HighSpeedTrain extends Train {
//     constructor(passengers, highSpeedOn, color, lightsOn) {
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedOn;
//     }
//     toggleHighSpeed() {
//         this.highSpeedOn = !this.highSpeedOn;
//         console.log('High speed status:', this.highSpeedOn);
//     }
//     toggleLights() {
//         super.toggleLights();
//         super.lightsStatus();
//         console.log('Lights are 100% operational.');
//     }
// }

// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
// var mySecondTrain = new Train('blue', false);
// var myThirdTrain = new Train('blue', false);

// var train4 = new Train('red', false);
// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// var train5 = new Train('blue', false);
// var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

// train5.toggleLights(); // undefined
// train5.lightsStatus(); // Lights on? true
// highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

// class Suplements{
//     constructor(Natural,Artificial){
//         this.Natural=Natural;
//         this.Artificial=Artificial;
//     }
// }
// class Gym{
//     constructor(Cardio,Machine){
//         this.Cardio=Cardio;
//         this.Machine=Machine;
//     }
// }

// class Calisthnics{
//     constructor(Upper_Body,Lower_Body){
//         this.Upper_Body=Upper_Body;
//         this.Lower_Body=Lower_Body;
//         this.Suplements=new Suplements("Healthy Foods","Creatine");
//         this.Gym=new Gym("Push-ups","Chest Machines");
//     }
// }

// let Today_Work = new Calisthnics("Chest-Triceps","Legs");

// console.log(Today_Work.Suplements);
// console.log(Today_Work.Gym);
// console.log(Today_Work.Upper_Body);

// // Task 1: Code a Person class
// // WRITE YOUR CODE HERE - Define the Person class
// // WRITE YOUR CODE HERE - Add a constructor with default parameters
// // WRITE YOUR CODE HERE - Add the sleep() method
// // WRITE YOUR CODE HERE - Add the doSomethingFun() method

// class Person {
//   constructor(name = "Tom", age = 20, energy = 100) {
//     this.name = name;
//     this.age = age;
//     this.energy = energy;
//   }
//   sleep() {
//     this.energy += 10;
//     console.log("Energy is increasing by: ", this.energy);
//   }
//   doSomethingFun() {
//     this.energy -= 10;
//     console.log("Energy is decreasing by: ", this.energy);
//   }
// }

// // Task 2: Code a Worker class
// // WRITE YOUR CODE HERE - Define the Worker class that extends Person
// // WRITE YOUR CODE HERE - Add a constructor with additional parameters
// // WRITE YOUR CODE HERE - Add the goToWork() method

// class Worker extends Person {
//   constructor(xp = 0, hourlyWage = 10) {
//     super((name), (age), (energy));
//     this.xp = xp;
//     this.hourlyWage = hourlyWage;
//   }
//   goToWork() {
//     this.xp += 10;
//     console.log("Increasing the xp by: ", this.xp);
//   }
// }
// // Task 3: Code an intern object, run methods
// function intern() {
//   // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
//   // WRITE YOUR CODE HERE - Call the goToWork() method
//   // WRITE YOUR CODE HERE - Return the intern object
//   let MyWorker = new Worker(
//     (name = "Bob"),
//     (age = 21),
//     (energy = 110),
//     (xp = 0),
//     (hourlyWage = 10)
//   )
//     MyWorker.goToWork();
//     return MyWorker;
// }

// // Task 4: Code a manager object, methods
// function manager() {
//   // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
//   // WRITE YOUR CODE HERE - Call the doSomethingFun() method
//   // WRITE YOUR CODE HERE - Return the manager object
//   let MyManager = new Worker(
//     (name = "Alice"),
//     (age = 30),
//     (energy = 120),
//     (xp = 100),
//     (hourlyWage = 30)
//   )
//     MyManager.doSomethingFun();
//     return MyManager;
// }

// let worker = intern();
// console.log(worker);
// let Manager = manager();
// console.log(Manager);

let Car = {
  name: "BMW i8",
  color: "Mate Black",
};

for (const key of Object.keys(Car)) {
  console.log(key, " : ", Car[key]);
}

let Bike = {
  name: "Kawasaki",
  color: "black",
};

for (let key of Object.keys(Bike)) {
  console.log(key, ": ", Bike[key]);
}

function AccessObjectProperties() {
  let dynamicaccess;
  if (Math.random() < 0.2) {
    dynamicaccess = "speed";
  } else {
    dynamicaccess = "color";
  }

  let drone = {
    speed: 20,
    color: "black",
  };
  console.log(drone[dynamicaccess]);

  for (let d in drone) {
    console.log(d);
  }
}

AccessObjectProperties();


console.log("Hello World");
console.log(`Hello
    World`);