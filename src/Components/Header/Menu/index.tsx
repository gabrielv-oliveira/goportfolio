import { Component } from "./styled";
import linkednImg from "../../../assets/linkedn.svg";
import instagramImg from "../../../assets/instagram.svg";
import gitImg from "../../../assets/github.svg";
import { Link } from "react-router-dom";

export function Header () {
    return(
        <Component>
          <h1>Gabriel Oliveira</h1>
        
            
            <div className="right">  
            <ul>
                  <li><Link to='#aboutme'>About Me</Link></li>
                  <li><Link to='#myskills'>My Skills</Link></li>
                  <li><Link to='#portfolio'>Portfolio</Link></li>
                  <li><Link to='#contactme'>Contact Me</Link></li>
                  
              </ul>
                <img src={ instagramImg } alt="Me siga no Instagram" />
                <img src={ linkednImg } alt="Veja meu perfil no Linkedn" />
                <img src={ gitImg } alt="Veja meu perfil no Linkedn" />
            </div>
              
        
         
        </Component>
    )
} 