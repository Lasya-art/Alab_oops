// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
//   };
  
  
//   for (let i = 0; i < adventurer.inventory.length; i++) {
//    
 //console.log(adventurer.inventory[i]);
//   }

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//       name: "Frank",
//       type: "Flea",
//       belongings: ["small hat", "sunglasses"]
//     },
//     // Method for dice rolls
//     roll(mod = 0) {
//       const result = Math.floor(Math.random() * 20) + 1 + mod;
//       console.log(`${this.name} rolled a ${result}.`);
//     }
//   };
  

//   adventurer.roll(); 
//   adventurer.roll(2); 

  

class Character {
    constructor(name) {
      this.name = name;
      this.health = 100; 
      this.inventory = []; 
    }
  
   
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  
  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  
 
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
  
  
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  
  robin.roll(); 
  robin.companion.roll(); 
  robin.companion.companion.roll();

  class Adventurer extends Character {
    constructor(name, role) {
      super(name); 
      this.role = role; 
      this.inventory.push("bedroll", "50 gold coins");
    }
  
   
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll(); 
    }
  
   
    addItem(item) {
      this.inventory.push(item);
      console.log(`${this.name} added ${item} to their inventory.`);
    }
  
    // Method to show adventurer's stats
    showStats() {
      console.log(`Name: ${this.name}, Role: ${this.role}, Health: ${this.health}, Inventory: ${this.inventory.join(', ')}`);
    }
  }
  
  // Example usage
  const robin = new Adventurer("Robin", "Warrior");
  robin.addItem("shield"); // Adding a new item to the inventory
  robin.scout(); // Robin scouts ahead
  robin.showStats();

  class Character {
    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH; 
      this.inventory = [];
    }
  
    
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  
    
    static MAX_HEALTH = 100;
  }
  
  