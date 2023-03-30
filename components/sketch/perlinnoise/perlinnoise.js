import React, { Component } from 'react';
import Particle from './particle'

// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/024-perlinnoiseflowfield.html
class PerlinNoise extends Component {
    constructor(){
        super()
        this.renderRef = React.createRef()
        this.state = {
        x: 0,
        y: 0
        };
    }
    
    componentDidMount(){
        const p5 = require('p5')
        var inc = 0.1;
        var scl = 10;
        var cols, rows;

        var zoff = 0;

        var fr;

        var particles = [];

        var flowfield;
        var iterations = 0;

        this.sketch = new p5( p => {
            p.setup = ()  => {
              let contentDiv = document.getElementById("content")
              p.frameRate(30);
              let canvas = p.createCanvas(contentDiv.clientWidth, contentDiv.clientHeight);
              canvas.style('z-index', '-1')
              canvas.position(0, 0)
              cols = p.floor(p.width / scl);
              rows = p.floor(p.height / scl);
                
              fr = p.createP('');

              flowfield = new Array(cols * rows);

              for (var i = 0; i < 1000; i++) {
                particles[i] = new Particle(p);
              }
            }

            p.windowResized = () => {
                let contentDiv = document.getElementById("content")
                let canvas = p.createCanvas(contentDiv.clientWidth, contentDiv.clientHeight);
                canvas.style('z-index', '-1')
                canvas.position(0, 0)
                p.clear()
                iterations = 0
            }

            p.draw = () => {
              if(iterations > 2000) {
                p.noLoop()
              }
              iterations++
              var yoff = 0;
              for (var y = 0; y < rows; y++) {
                var xoff = 0;
                for (var x = 0; x < cols; x++) {
                  var index = x + y * cols;
                  var angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4;
                  var v = p5.Vector.fromAngle(angle);
                  v.setMag(1);
                  flowfield[index] = v;
                  xoff += inc;
                }
                yoff += inc;

                zoff += 0.0003;
              }

              for (var i = 0; i < particles.length; i++) {
                particles[i].follow(flowfield, scl, cols);
                particles[i].update();
                particles[i].edges();
                particles[i].show();
              }

              // fr.html(p.floor(p.frameRate()));
            }
        });
    }
        render(){
            return (
                <div ref={this.renderRef}></div>
            );
        }
}

export default PerlinNoise;