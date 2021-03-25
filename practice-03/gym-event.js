const EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor(name){
        super();
        this.name = name;

        this.id = 0;
        this.eventName = "boom";

        //register
        this.on(this.eventName, this.doExesice);
        //trigger
        this.emit(this.eventName);
    }

    doExesice() {
        this.id = setInterval(() => {
            console.log(`${this.name} is working out`);
        }, 1000);
    }

    rest(){
        console.log(`${this.name} need to rest`);
        clearInterval(this.id);
    }
}

const gym1 = new Gym("Gym1");
setTimeout(() => gym1.rest(), 5000);

const gym2 = new Gym("Gym2");
setTimeout(() => gym2.rest(), 10000);