export class Person{
    //public name: string | undefined;
    //private address?: string;

    constructor(
        public name : string, 
        private address: string = 'No Address'){
        this.name = name;
        this.address=address;
    }
}

export class Weapon{

    public weapon? : string;
    constructor(weapon: string){
        this.weapon = weapon;
    }
}

export class Hero extends Person{

    public weapon: Weapon;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'New York');
        this.weapon = new Weapon(alterEgo+age);
    }
}

const ironman = new Hero('IronMan', 45,'Tony');

console.log(ironman)