let dog = {
    sound : "au au",
    speak : function() {

        console.log(this.sound);
    }

}

let cat = {
    sound : "miau",
    speak : function() {

        console.log(this.sound);
    }

}

dog.speak();
cat.speak();

function speakGeneric(){
    console.log(this.sound)
}

let bird1 = {
    sound : "assosbioooooo 1",
    speak : speakGeneric
}

let bird2 = {
    sound : "assosbioooooo 2",
    speak : speakGeneric
}
let bird3 = {
    sound : "assosbioooooo 3",
    speak : speakGeneric
}
let bird4 = {
    sound : "assosbioooooo 4",
    speak : speakGeneric
}
let bird5 = {
    sound : "assosbioooooo 5",
    speak : speakGeneric
}
let bird6 = {
    sound : "assosbioooooo 6",
    speak : speakGeneric
}


bird1.speak();
bird2.speak();
bird3.speak();
bird4.speak();
bird5.speak();


let bindendFunctionGeneric = speakGeneric.bind(bird6);

bindendFunctionGeneric();