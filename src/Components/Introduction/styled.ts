import styled from "styled-components";

export const Component = styled.div`
  width: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 1rem;

  .react-tabs {
    display: block;
  }

  .react-tabs__tab-list {
    border: none;
    margin: 0 0 10px;
    padding: 0;
  }

  .react-tabs__tab {
    display: inline-block;
    font-size: 1.2rem;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 12px;
    cursor: pointer;
    caret-color: var(--grey);

    ::before {
      position: absolute;
      content: "";
      width: 30px;
      background: rgba(0, 0, 0, 0.2);
      -webkit-transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
      transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
      height: 2px;
      bottom: 0;
    }
  }

  .link-about {
    font-weight: 500;
    font-size: 18px;
  }

  .react-tabs__tab--selected {
    background: #fff;
    color: var(--green);
    font-weight: 500;
    border: none;

    ::before {
      width: 100%;
      background: currentColor;
    }
  }

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

      :hover {
        animation: 1.5s ease-in-out infinite;
      }
    }

    p {
      font-weight: 400;
      color: var(--grey);
    }

    .language {
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
