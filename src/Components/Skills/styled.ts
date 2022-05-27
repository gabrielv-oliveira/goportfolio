import styled from "styled-components";
import skillsBgImg from "../../assets/skills-bg.svg";

export const Component = styled.div`
  background: var(--green);
  background-image: url(${skillsBgImg});
  display: grid;
  height: 100%;
  justify-content: center;
  padding: 1rem 1rem 0 1rem;

  hgroup {
    margin-bottom: 1rem;
    text-align: center;
    color: #fff;
    h1{
      color: var(--purple);
    }
    
    h3{
      font-weight: lighter;
      }
  }
  div {
    width: 74rem;
    nav {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, 200px);

      .item1{
        grid-row: 1/ span 2;
        padding-top: 5rem;
      }
      .item2{
        align-self: center;
        padding-top: 11rem;
      }
      .item3{
        grid-row: 2 / -1;
        align-self: center;
        padding-top: 5rem;
      }
      hgroup {
        text-align: center;
        color: #fff;
        width:18rem;
        align-items:center;
        h2 {
          color: var(--purple);
          font-weight: 700;
        }
        p{
          padding: 1rem;
          
        }
    
      }

      img {
        grid-column: 2;
        grid-row: 1 / 3;
        width: 635px;
      }
    }
  }
`;
