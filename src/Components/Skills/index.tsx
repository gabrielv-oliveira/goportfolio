import 'simple-react-donut-chart/src/style.css'
import { Component } from "./styled";
import skillsImg from "../../assets/skills.png";


export function Skills() {
    return (
        
        <Component id='skills'>

            <hgroup>
                <h1>My Skills</h1>
                 <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
            </hgroup>
                 
            <div>
                <nav>
                    <hgroup className='item1'>
                        <h2>Marketing Graduated</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </hgroup>
                    <hgroup className='item2'>
                        <h2>Front End Student</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </hgroup>
                    
                    <img src={skillsImg} alt="" />      
                    <hgroup className='item3'>
                        <h2>Client Support</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </hgroup>
                    <hgroup>
                        <h2>Designer</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </hgroup>              
                </nav>
                
            </div>
            
        </Component>
    )
}