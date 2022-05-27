import { Component } from './styled';
import frontImg from '../../assets/front-perfil.png';
import cssImg from '../../assets/css.svg';
import htmlImg from '../../assets/html.svg';
import reactImg from '../../assets/react.svg';
import styledImg from '../../assets/styled.svg';
import javascriptImg from '../../assets/javascript.svg';
import ciclesImg from '../../assets/cicles.svg'
import { Buttons } from '../Buttons';
import { DevBox } from './devBox';


export function Introduction () {
    return(
        <Component>
            <img src={frontImg} alt="" />

            <div className='rigth-content'>
                <h1 aria-hidden="true">Front End <strong>Developer</strong></h1>
                <p>I'm passionate about developing new projects and I belie that it<br />  can change lives. Interested in the entire frontend spectrum and <br /> working on ambitious projects.</p>
                
                <DevBox/>
                <div>
                <img src={cssImg} alt="CSS" />
                <img src={htmlImg} alt="HTML" />
                <img src={reactImg} alt="React JS" />
                <img src={styledImg} alt="Styled Components" />
                <img src={javascriptImg} alt="JavaScript" />
                </div>
                

                <Buttons 
                title ='Skills'
                color ='border-purple'
                link ='#skills'
                />
            </div>

            <img className='cicles' src={ciclesImg} alt="" />
        </Component>
    )
}