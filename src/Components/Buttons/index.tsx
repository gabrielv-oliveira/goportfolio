import { Component } from "./styled";


interface ButtonProps{
    title: string;
    link: string;
    color: string;
}

export function Buttons (props: ButtonProps) {
    return(
        <Component>
            <button className={props.color}><a href={props.link}>{props.title}</a></button>
        </Component>
        
    )
}