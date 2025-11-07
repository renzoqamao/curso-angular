function addNumbers( a:number, b:number):number{
    return a+b;
}

const addNumberArrow = (a : number , b: number):string=>{
    return `${a+b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number=2){
    return firstNumber*base;
}

interface Character{
    name : string;
    hp : number;
    showHp:  ()=> void;
}

const healCharacter = (character : Character, amount: number )=>{
    character.hp += amount;
}

const strider : Character = {
    name : 'renzo',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 10);
strider.showHp();

const result: string | number = addNumbers(1,2)
const result2: string = addNumberArrow(1,2)
const multiplyResult : number = multiply(5);
console.log({result, result2, multiplyResult})
export {};