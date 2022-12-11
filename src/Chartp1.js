import React from 'react'
import Sketch from 'react-p5'

function PSketchone() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(605, 60).parent(canvasParentRef)
  }
  
  const draw = p5 => {
	p5.background(240, 234, 229)
	let c = p5.color('#4C4643');
	p5.fill(c);
    p5.rect(0, 0, 6, 55);
    let d = p5.color('#CDBFB6');
    p5.fill(d);
    p5.noStroke();//不知能不能只去掉一个
    p5.rect(9, 0, 594, 55)
  }
  
  return <Sketch setup={setup} draw={draw} />
}

export default PSketchone