import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalState } from "../globalStateProvider";

const Header = () => {
  const [{}, dispatch] = useGlobalState();
  return (
    <Wrap>
      <div>
        <h2>FireGram</h2>
        <Button onClick={() => dispatch({ type: "TOGGLE_ADD_POST" })}>
          Add Picture
        </Button>
      </div>
      <h1>Your Pictures</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, sint?
      </p>
    </Wrap>
  );
};

export default Header;

const Button = styled.button`
  width: 20rem;
  padding: 0.5rem;
  border: none;
  background-color: rgba(0, 250, 255, 0.8);
  border-radius: 0.3rem;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(0, 250, 255, 0.2);
    color: rgba(0, 100, 255, 1);
  }
`;
const Wrap = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 2rem 0;
  > div {
    position: sticky;
    top: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    > h2 {
      text-align: start;
      font-size: 2rem;
      letter-spacing: 0.2rem;
      color: rgba(255, 180, 150, 0.3);
    }
  }
  > h1 {
    width: 100%;
    text-align: center;
    padding-top: 7rem;
    font-size: 4rem;
    color: rgba(0, 0, 0, 0.7);
  }
  > p {
    width: 100%;
    text-align: center;
    padding-top: 3rem;
    font-size: 1.7rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
  }
`;
