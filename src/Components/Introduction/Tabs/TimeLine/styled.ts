import styled from "styled-components";

export const Component = styled.nav`
  width: 500px;
  color: #fff;
  padding: 5px 20px;

  .workSpace {
    height: 190px;
    overflow-y: scroll;
    overflow-x: clip;
    padding: 10px;

    ::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }
    ul {
      list-style-type: none;
      border-left: 2px solid #094a68;
      padding: 10px 10px;
    }
    ul li {
      padding: 20px 20px;
      position: relative;
      transition: 0.5s;
    }
    ul li span {
      display: inline-block;
      background-color: #1685b8;
      border-radius: 25px;
      padding: 2px 5px;
      font-size: 15px;
      text-align: center;
    }
    ul li .content h3 {
      color: #34ace0;
      font-size: 17px;
      padding-top: 5px;
    }
    ul li .content p {
      padding: 5px 0px 15px 0px;
      font-size: 15px;
    }
    ul li:nth-child(even) {
      .content h3 {
        color: var(--green);
      }
      span {
        display: inline-block;
        background-color: var(--green-darken);
        border-radius: 25px;
        padding: 2px 5px;
        font-size: 15px;
        text-align: center;
      }
      :before {
        background-color: var(--green-darken);
      }
    }

    ul li:before {
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      background-color: #34ace0;
      border-radius: 50%;
      left: -16px;
      top: 28px;
      transition: 0.5s;
    }

    ul li:hover:before {
      background-color: #0f0;
      box-shadow: 0px 0px 10px 2px #0f0;
    }
  }
`;
