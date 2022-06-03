import { Component } from "./styled"

interface TopicsProps {
    link: string,
    place: string,
    theme: string,
    description: string,
    date: string,
    seDescription: string
}

export function Topics (props: TopicsProps) {
    return (

        <Component>

            <a className='link-about' rel='noopener noreferrer' target='_blank' href={props.link}>{props.theme} | {props.place}</a> (<i> {props.date} </i>)<br />
            {props.description} <br /> {props.seDescription}

        </Component>
    )
}