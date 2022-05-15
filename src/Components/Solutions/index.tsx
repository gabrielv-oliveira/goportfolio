import { Buttons } from "../Buttons";
import { Component } from "./styled";
import solutionsImg from "../../assets/solutions.png"
import purpleCicleImg from "../../assets/purple-circle.svg"

export function Solutions (){
    return(
        <Component>
            <img className="purple-cicle" src={purpleCicleImg} alt="" />
            <div id="solutions">
            <h1>Creating Solutions <br /><strong>for you</strong></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <Buttons 
                title ='Portfolio'
                color ='green'
                link ='#portfolio'
                />
            </div>
            
            <img src={solutionsImg} alt="" />
            
            
        </Component>
    )
}