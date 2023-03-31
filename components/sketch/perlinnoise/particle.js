// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY

class Particle {
  constructor(p5, w, h) {
    this.p = p5;
    this.w = w;
    this.h = h;
    this.pos = this.p.createVector(this.p.random(this.w), this.p.random(this.h));
    this.vel = this.p.createVector(0, 0);
    this.acc = this.p.createVector(0, 0);
    this.maxspeed = 4;
    this.prevPos = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  follow(vectors, scl, cols) {
    var x = this.p.floor(this.pos.x / scl);
    var y = this.p.floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    this.p.stroke(187, 68, 48, 10);
    // this.p.stroke(235, 245, 238, 10);
    this.p.strokeWeight(1);
    this.p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x > this.w) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = this.w;
      this.updatePrev();
    }
    if (this.pos.y > this.h) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = this.h;
      this.updatePrev();
    }

  }

}

export default Particle