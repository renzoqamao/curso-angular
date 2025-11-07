let skills: (string | boolean)[] = ['Bash', 'Counter', 'Healing',true];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //opcional o no definido
}

const strider : Character= {
    name : 'Renzo',
    hp : 100,
    skills : ['bash', 'counter'],
}

strider.hometown= 'Lima';

console.table(strider);

export {};