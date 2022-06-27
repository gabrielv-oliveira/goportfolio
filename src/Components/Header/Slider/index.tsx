import { Component } from "./styled";
import sliderImg from "./slider-perfil.png"
import { Buttons } from "../../Buttons";

export function Slider () {
    return(
    <Component>
    <div data-aos='fade-left'>
        <p className="hello">Hello, I'm</p>
        <p className="name">Gabriel Oliveira</p>
        <p className="subTitle">Front End Developer</p>
        <div className="buttons">
        <Buttons
        title="About Me"
        link="#aboutme"
        color="purple"
        />
        <Buttons
        title="Contact Me"
        link="#contact"
        color="transparent"
        />
        </div>
        
        </div>
    <img data-aos='fade-right' src={sliderImg} alt="" />
    </Component>

)

}