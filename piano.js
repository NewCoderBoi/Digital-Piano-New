const WHITE_KEYS = ['z','x','c','v','b','n','w','e','r','t','y','u','i','o','p' , '[', ']'];
const BLACK_KEYS = ['s','d','g','h','j','4','5','7','8','9', '-', '='];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach(key => {
    key.addEventListener('click' , ()=> {
        playNote(key);
    })
})

document.addEventListener('keydown' , (event)=>{
    if(event.repeat) return;
    const key = event.key;
    const whiteIndex = WHITE_KEYS.indexOf(key);
    const blackIndex = BLACK_KEYS.indexOf(key);

    if(whiteIndex > -1) playNote(whiteKeys[whiteIndex]);
    if(blackIndex > -1) playNote(blackKeys[blackIndex]);
})

function playNote(key){
    const sound = document.getElementById(key.dataset.note);
    sound.currentTime = 0;

    key.classList.add('pressed')
    setTimeout(()=>
    {
        key.classList.remove('pressed')
    },300);
    // sound.addEventListener('keyup' , ()=>{
    //     key.classList.remove('pressed');
    // })
    sound.play();
    
}


