export interface Passenger{
    name: string;
    children? : string[];
}

const passenger1 : Passenger = {
    name : 'fernando'
}

const passenger2: Passenger ={
    name : 'Melissa',
    children : ["sandra", "Natalia"]
}

const returnChildrenNumber = (passenger : Passenger): number =>{
    //const howManyChildren = passenger.children?.length || 0; // optional-chaining
    const howManyChildren = passenger.children!.length; // non-null assertion operator
    return howManyChildren;
}

returnChildrenNumber(passenger2);
returnChildrenNumber(passenger1);