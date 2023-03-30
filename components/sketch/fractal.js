
import React, { Component } from 'react';

class Fractal extends Component {
    constructor(){
        super()
        this.renderRef = React.createRef()
        this.state = {
        x: 0,
        y: 0
        };
        this.points = [];
        this.started = false;
        this.currentPoint = [0, 0];
    }

    getFirstPoint(original_points, p) {
      let t = p.random();
      let s = p.random();
      
      if (s+t > 1) {
        s = 1-s;
        t = 1-t;
      }
      
      let a = 1-s-t;
      let b = s;
      let c = t;
      
      
      /* Calculate the Point Q*/
    let qx = a*original_points[0][0] + b*original_points[1][0] + c*original_points[2][0];
    let qy = a*original_points[0][1] + b*original_points[1][1] + c*original_points[2][1];
      
    return [qx,qy];
    }
    
    generateTrianglePoints(p){
        let points = []
        for(let i = 0; i < 3; i++){
            points.push([p.random(p.windowWidth - 100), p.random(p.windowHeight - 100)])
        }
        return points
    }
    
    calculateTriangleArea(points, p){
        let area
        let sides = []
        for(let i = 0; i < points.length; i++){
           sides.push(p.dist(this.points[i][0], this.points[i][1], this.points[(i+1)%3][0], this.points[(i+1)%3][1]))
        }
        
        const s = (sides[0] + sides[1] + sides[2])/2
        area = Math.sqrt(s * (s - sides[0]) * (s - sides[1]) * (s - sides[2]))
        
        return area
    }
    
    makeTriangle(p){
        this.points = this.generateTrianglePoints(p)
        let totalArea = p.windowHeight * p.windowWidth
        let areaThreshold = 0.2 * totalArea
        let triangleArea = this.calculateTriangleArea(this.points, p)
        
        if(this.calculateTriangleArea(this.points, p) < areaThreshold){
            this.makeTriangle(p)
        }

        this.currentPoint = this.getFirstPoint(this.points, p)
    }
    
    doFractal(vertex, p) {
        if(this.currentPoints < 1000){
            this.currentPoint[0] += (vertex[0] - this.currentPoint[0])/2
            this.currentPoint[1] += (vertex[1] - this.currentPoint[1])/2
            p.point(this.currentPoint[0], this.currentPoint[1])
            this.currentPoints++    
        }
        
    }
    
    componentDidMount(){
        const p5 = require('p5')
        this.sketch = new p5( p => {
            p.setup = ()  => {
                if(!this._Mounted){
                    let canvas = p.createCanvas(p.windowWidth, p.windowHeight)
                    .parent(this.renderRef.current)
                    canvas.style('z-index', '-1')
                    canvas.position(0, 0)

                    this.makeTriangle(p)
                    this._Mounted = true
                }
                this.currentPoints = 0
            }

            p.windowResized = () => {
                let canvas = p.createCanvas(p.windowWidth, p.windowHeight)
                canvas.style('z-index', '-1')
                canvas.position(0, 0)
                p.clear()
                this.makeTriangle(p)
                this.currentPoints = 0
            }

            p.draw = () => {
                p.stroke(187, 68, 48, 24)
                p.strokeWeight(24)
                this.doFractal(this.points[Math.floor(Math.random() * this.points.length)], p)
                
                if(p.pmouseX != p.mouseX && p.pmouseY != p.mouseY){
                    // p.stroke(255, 10)
                    // p.strokeWeight(12)
                    // p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY)
                }
            }
        });
    }
        render(){
            return (
                <div ref={this.renderRef}></div>
            );
        }
}

export default Fractal;