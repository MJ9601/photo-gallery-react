import React from "react";
import styled from "styled-components";
import { useGlobalState } from "../globalStateProvider";

const Modul = () => {
  const [{ selectedPic }, dispatch] = useGlobalState();
  return (
    <Wrap>
      <Button>
        <span onClick={() => dispatch({ type: "SET_PIC", selectedPic: null })}>
          X
        </span>
      </Button>
      <ImgWrap>
        <img src={selectedPic.src} alt="" />
        <h2>{selectedPic.desc}</h2>
      </ImgWrap>
    </Wrap>
  );
};

export default Modul;
const Button = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  font-size: 2rem;
  width: 80%;
  text-align: end;
  > span {
    color: #fff;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;
const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;
const ImgWrap = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 90%;
  display: grid;
  place-items: center;
  > img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    border-radius: 0.5rem;
  }
  > h2 {
    color: #fff;
    font-weight: 400;
    text-align: center;
    font-size: 1.8rem;
    line-height: 2.7rem;
  }
`;
