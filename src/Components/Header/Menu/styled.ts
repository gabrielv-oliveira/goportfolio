import styled from 'styled-components'

export const Component = styled.div`

    padding: 1rem 2rem ;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #00A1BE;
    
    

   h1{
        color: #fff;
    }

    ul{
        display: inline-flex;
        left: 2rem;
       
        }
    li{
        list-style-type: none;
        font-size:17px ;
        font-weight: 500;
        color: #fff;
            & + li {
            margin-left: 16px;
        }
            &:last-child{
                font-size: 20px;
                font-weight: 700;
                color: var(--purple);
            }
        }
    
    img{
        max-width: 32px;
        
        & + img{
            margin-left: 10px;
        }
        
    
    } 

    
    `;