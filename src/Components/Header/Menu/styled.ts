import styled from "styled-components";

export const Component = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: space-around;
  background: #008da7e0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  h1 {
    color: #fff;
  }
  .right {
    justify-content: flex-start;

    nav {
      display: inline-flex;
      left: 2rem;
    }
    a {
      list-style-type: none;
      font-size: 17px;
      font-weight: 500;
      color: #fff;
      & + a {
        margin-left: 16px;
      }
      &:last-child {
        font-size: 20px;
        font-weight: 700;
        color: var(--purple);
        margin-right: 10px;
      }
    }

    img {
      max-width: 32px;

      & + img {
        margin-left: 10px;
      }
    }
  }
`;
