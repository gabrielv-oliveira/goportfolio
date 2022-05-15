import { Component } from "./styled";
import linkednImg from "../../../assets/linkedn.svg";
import instagramImg from "../../../assets/instagram.svg";

export function Header () {
    return(
        <Component>
          <h1>Gabriel Oliveira</h1>
        
              <ul>
                  <li>About Me</li>
                  <li>My Skills</li>
                  <li>Portfolio</li>
                  <li>Contact Me</li>
              </ul>
            <div>
                <img src={ instagramImg } alt="Me siga no Instagram" />
              <img src={ linkednImg } alt="Veja meu perfil no Linkedn" />
            </div>
              
        
         
        </Component>
    )
} 