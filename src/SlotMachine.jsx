import React from 'react';
import Matching from './mtchingComponent/Matching';
import NotMatching from './mtchingComponent/NotMatching';
const SlotMachine = (props) =>{
    let x= props.x;
    let y= props.y;
    let z= props.z;
  const value = (x===y && y===z) ? <Matching x= {props.x} y= {props.y} z= {props.z}/> 
    : <NotMatching x ={props.x} y ={props.y} z= {props.z}/> ;
    return value;
};
export default SlotMachine;