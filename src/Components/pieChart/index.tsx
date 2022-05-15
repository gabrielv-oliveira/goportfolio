import {Component} from './styled'

interface ChartPorps{
    class: string;
    name: string;
    porcent:number;
    }

export function Chart (props: ChartPorps){
    return(
    <Component  >
        <div aria-colcount={55} className={props.class}> {props.name}</div>
           
        </Component>
    )
}


