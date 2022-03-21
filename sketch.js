let bubbles = [];

function setup() {
    createCanvas(displayWidth, displayHeight);
    for (let i = 0; i < 300; i++) { // 10 Kreise werden gebildet
        let x = random(width);
        let y = random(height);
        let r = random(10, 50);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }
}

function mouseClicked() {
    bubbles.forEach(bubble => {
        if (bubble.touched()) {
            bubbles.splice(bubbles.indexOf(bubble), 1)
        }
    });
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

//--------------Bubble KLASSE------------------------------------
class Bubble {
    constructor(tempX, tempY, tempRadius) {
        this.x = tempX;
        this.y = tempY;
        this.radius = tempRadius;
        this.brightness = 0; // Schwarz während der Initialisierung
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    touched() {
        return dist(mouseX, mouseY, this.x, this.y) < this.radius
    }

    show() {
        if (this.touched()) {
            this.brightness = 255;
        }
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 100);
        ellipse(this.x, this.y, this.radius * 2);
        this.brightness = 0;
    }
} //----------------ENDE der Bubble-KLASSE----------------------------