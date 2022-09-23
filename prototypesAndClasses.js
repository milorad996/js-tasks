

class Character {

    

    constructor() {

        

        if (this.constructor == Character) {
          throw new Error("Abstract classes can't be instantiated.");
        }
        this.x = Math.floor(Math.random() * 10);       
        this.y = Math.floor(Math.random() * 10);        
        

        this.id = ++Character.counter;
        console.log("The number of characters created is" + " " + this.id);
        
      }

      

      set(x,y){
    
            if(x > 10 && y > 10){
                throw 'Error'
            }

            this.x = x;
            this.y = y;
        
        
      }
      
    
     
    
      
}
Character.counter = 0;


class PlayerCharacter extends Character {
    
}
class NonPlayerCharacter extends Character {

}


let player1 = new PlayerCharacter();
console.log(player1)
let player2 = new PlayerCharacter();
console.log(player2.set(7,8))
console.log(player2)
let player3 = new PlayerCharacter();
console.log(player3)

