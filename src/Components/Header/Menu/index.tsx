import { Component } from "./styled";
import linkednImg from "../../../assets/linkedn.svg";
import instagramImg from "../../../assets/instagram.svg";
import gitImg from "../../../assets/github.svg";



export function Header () {
    return(
        <Component>
          <h1>Gabriel Oliveira</h1>
        
            
            <div className="right">  
            <nav>
                <a href='#aboutme'>About Me</a>
                <a href='#skills'>Skills</a>
                <a href='#portfolio'>Portfolio</a>
                <a href='#contactme'>Contact Me</a>
            </nav>
                <a rel="noopener noreferrer" target='_blank' href="https://www.instagram.com/gabuhvv/"><img src={ instagramImg } alt="Me siga no Instagram" /></a>
                <a rel="noopener noreferrer" target='_blank'href="https://www.linkedin.com/in/gabriel-vinicius-898a24101/"><img src={ linkednImg } alt="Veja meu perfil no Linkedn" /></a>
                <a rel="noopener noreferrer" target='_blank'href="https://github.com/gabrielv-oliveira"><img src={ gitImg } alt="Veja meu perfil no Linkedn" /></a>
            </div>
              
        
         
        </Component>
    )
} 