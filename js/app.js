// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var ran = Math.floor(Math.random() * 3) + 1;

    
    this.x = 27;
    this.y = 55;
    this.updateSpeed = 300;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x > 505) {
        var ran = Math.floor(Math.random() * 3) + 0;
        
        this.updateSpeed = 100 + 100 *ran;
        this.y = 55 + 80 * ran;
        this.x = 0 ;
    }
    
   
    this.x = this.x + this.updateSpeed * dt;

  
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    var ran = Math.floor(Math.random() * 4) + 0;
    this.a = 101 * ran;
    this.b = 55+ 80*4;
    this.speed = 101;

    this.sprite = 'images/char-boy.png';

};

Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.a > 404) {
        this.a = 101*4;
       
    } else if (this.a < 0) {
        this.a = 0;
    }
    if (this.b > 320+55) {
        this.b = 320+55;
    } else if (this.b < 55) {
        this.b = 55;
    }
     allEnemies.forEach(function(enemy) {
            if ( Math.abs(player.a - enemy.x) < 20 && Math.abs(player.b - enemy.y) < 20){
                player.a = 101;
                player.b = 55+ 80*4;
                return;
            }
        });
   
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.a, this.b);
};

Player.prototype.handleInput = function(move) {
    



    if (move === 'left') {
        this.a = this.a - 101;
    }
    else if (move === 'right') {
        this.a = this.a + 101;
    }
    else if (move === 'up') {
        this.b = this.b - 80;
    } 
    else if (move === 'down') {
        this.b = this.b + 80;
    }      
};


var enemy1 = new Enemy();
var enemy2 = new Enemy();

var player = new Player();
var allEnemies = [enemy1, enemy2];
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
