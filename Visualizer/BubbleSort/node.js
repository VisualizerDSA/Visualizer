class Node {
    constructor(xPos, val) {
        this.xPos = xPos;
        this.val = val;
        this.swap = false;
        this.newPos = xPos;
        this.dir = 1;
    }

    display() {
        fill(RECT_COLOR[0], RECT_COLOR[1], RECT_COLOR[2]);
        rect(this.xPos, 350, 50, 50);
        textSize(26);
        textAlign(CENTER);
        fill('white');
        text(this.val, this.xPos + 25, 385);
    }

    move() {
        if (this.dir > 0) {
            if (this.xPos >= this.newPos) {
                this.xPos = this.newPos;
                this.swap = false;
            }
        }
        else {
            if (this.xPos <= this.newPos) {
                this.xPos = this.newPos;
                this.swap = false;
            }
        }
        this.xPos += 1 * this.dir;
    }
}