import { Component } from './styled';
import frontImg from '../../assets/front-perfil.png';
import cssImg from '../../assets/css.svg';
import htmlImg from '../../assets/html.svg';
import reactImg from '../../assets/react.svg';
import styledImg from '../../assets/styled.svg';
import javascriptImg from '../../assets/javascript.svg';
import ciclesImg from '../../assets/cicles.svg'
import { Buttons } from '../Buttons';


export function Introduction () {
    return(
        <Component>
            <img src={frontImg} alt="" />

            <div className='rigth-content'>
                <h1>Front End <strong>Developer</strong></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
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