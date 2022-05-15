import styled from "styled-components";

export const Component = styled.div`
width: 100%;
display: inline-flex;
justify-content: space-evenly;
align-items: center;
background: var(--blue);
padding-top: 4rem;
 
.hello{
    color: #fff;
    font-size: 4rem;
    font-weight: lighter;
}

.name{
    color: var(--purple);
    font-size: 4.5rem;
    font-weight: 700;
}

.subTitle{
    color: #fff;
    font-size: 2rem;
    margin-bottom: 1rem;
}
.buttons{
    display: inline-flex;
    justify-content: space-between;
    width: 17rem;
}
img{
    max-width: 576px;
    margin-left: -4rem;
}

`;