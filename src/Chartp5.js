import React from 'react'
import Sketch from 'react-p5'

function PSketch() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(605, 70).parent(canvasParentRef)
  }
  
  const draw = p5 => {
	p5.background(240, 234, 229)
	let c = p5.color('#4C4643');
	p5.fill(c);
  p5.rect(0, 0, 270, 55);
  let d = p5.color('#CDBFB6');
  p5.fill(d);
  p5.noStroke();//不知能不能只去掉一个
  p5.rect(273, 0, 330, 55)
  }
  
  return <Sketch setup={setup} draw={draw} />
}

export default PSketch