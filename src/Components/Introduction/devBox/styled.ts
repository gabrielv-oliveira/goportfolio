import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars


export const DevBoxx = styled.nav`
  display: grid;
  row-gap: 0.5rem;
  width: 300px;
  background-image: linear-gradient(261deg, #28114b, #5f32a7);
  background-size: 150% 100%;
  border-radius: 2rem;
  padding: 1.5rem;
  font-weight: lighter;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  :hover {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
  }
  :focus {
    outline: none;
}

  p {
    font-weight: lighter;
    color: #fff;
  }

  .title {
    color: var(--grey);
    font-weight: lighter;

    ::before {
      content: "//";
    }
  }
  .object {
    color: var(--green);
    font-weight: lighter;
    ::after {
      content: "{";
      color: #fff;
      font-weight: lighter;
      margin-left: 7px;
    }
  }
`;

interface ObjectProps{
  isBrasil?: boolean; 
}

export const Object = styled.div`
  display: block !important;

  ::after {
    content: "}";
    color: #fff;
    font-weight: lighter;
    margin-left: 7px;
  }
  

  .content {
    padding-left: 2rem;
    color: #fff;
  }


`;

export const P = styled.p  <ObjectProps>`
  
  span{
    color: var(--blue);
  }
  
`;
