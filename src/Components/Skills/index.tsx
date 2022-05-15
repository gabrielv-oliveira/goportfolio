import { Chart } from "../pieChart";
import { Component } from "./styled";



export function Skills (){
    return(
        <Component>
          <Chart 
          class ="pie animation"
          name="HTML"
          porcent={55}
          />
        </Component>
    )
}