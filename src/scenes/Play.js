class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
//modifying prexisting phaser stuff. needs to be exact name and order.
    init(){

    }
    preload(){
        //use PNG over jpg
        this.preload.image("rocket", "./assets/rocket.png")
    }

    create(){
        this.add.text(20, 20, "Rocket Patrol  Play")
    }
    update(){

    }
}