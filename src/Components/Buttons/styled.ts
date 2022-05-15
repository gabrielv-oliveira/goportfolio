import styled from "styled-components";

export const Component = styled.div`
button{
    padding: 0.7rem 0;
    border-radius: 0.4rem;
    width: 8rem;
    cursor: pointer;

   
}
.purple, .green,.transparent,.border-purple{
    a{
        font-weight: 700;
        font-size: 1rem;
    }
}

.purple{
    background: var(--purple);
    border: 2px solid var(--purple);
    transition: 0.4s;
    a{
        color:#fff;                
       }

    &:hover{
        background: transparent;
        border: 2px solid var(--purple);
        a{
            color: var(--purple);
        }
    }
}
.green{
    background: var(--green);
    border: 2px solid var(--green);
    transition: 0.2s;
    a{
        color:#fff;     
        
       }

       &:hover{
        background:var(--green-darken);
        border: 2px solid var(--green-darken);
       
    }
}
.transparent{
    background: transparent;
    border: 2px solid #fff;
    transition: 0.4s;
    a{
        color:#fff;
        }
    &:hover{
        background: #fff;
        a{
            color:var(--purple);
        }
    }
}
.border-purple{
    background: transparent;
    border: 2px solid var(--purple);
    transition: 0.5s;
    a{
        color:var(--purple);
        
    }
    &:hover{
        background: var(--purple);
       a{
           color: #fff;
       } 
    }
}
`;