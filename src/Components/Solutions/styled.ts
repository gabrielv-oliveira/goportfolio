import styled from "styled-components";

export const Component = styled.div`
width: auto;
display: flex;
justify-content: space-between;
align-items: center;
background: #fafafa;

div{
    width: 30.5rem;
    display: grid;
    justify-content: center;
    row-gap: 2rem;
    margin-left: -55px;
    
    h1{
        font-size: 3rem;
        strong{
            font-weight: lighter;
        }
    }

    p{
    text-align: center;
    }
  
}

img{    
        width: 825px;
       
    }
    .purple-cicle{
        width: 150px;
        margin-bottom: -280px;
    }
    @media (max-width: 1775px) {
        img{
            width: 725px;
        }
        .purple-cicle{
            width:auto;
            margin-bottom: -220px;
        }
    }
    `;