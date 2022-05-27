import styled from "styled-components";

export const Component = styled.div`
  width: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 1rem;

  div {
    display: grid;
    row-gap: 1rem;
    width: 42rem;
    align-content: flex-end;

    h1 {
      font-size: 3rem;
      color: var(--green);
      font-weight: bolder;

      strong {
        color: var(--purple);
      }

     :hover{
     animation: 1.5s ease-in-out infinite;
        
     }
}
  

    p {
      font-weight: 400;
      color: var(--grey);
    }

    div {
      display: inline-flex;
      align-items: flex-start;

      img {
        max-width: 2.5rem;
        margin-right: 5px;
      }
    }
  }

  .cicles {
    max-width: 13rem;
    position: absolute;
    right: 0rem;
    z-index: -1;
  }
`;
