interface AudioPlayer{
    audioVolume: number;
    songDuration : number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author : "Ed Sheeran",
        year : 2015
    }
}

const song = 'New Song';

const {song :anotherSong , details : {author:authorIn} } = audioPlayer;
//const {author} = details;

//console.log({anotherSong, authorIn})


const dbz : string[] =['Goku', 'Vegeta', 'Trunks'];

const [,  , trunks = 'not found'] = dbz;

console.log({trunks});