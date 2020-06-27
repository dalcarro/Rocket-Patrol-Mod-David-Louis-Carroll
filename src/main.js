//*http://localhost:8000*//
console.log("hello World!");
config = {
    type: Phaser.Canvas,
    width: 640,
    height: 480,
    scene: [ Menu , Play ],


}
//creates main game object
let game = new Phaser.Game(config);