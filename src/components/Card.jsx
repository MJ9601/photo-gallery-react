import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <Wrap>
      <img src="https://lastfm.freetls.fastly.net/i/u/770x0/85eea12f812d42c5acd4def51167deef.jpg" />
      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    </Wrap>
  );
};

export default Card;

const Wrap = styled.div`
  width: 30rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  > img {
    width: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
  }
  &:hover {
    > div {
      top: 0;
    }
  }
  > div {
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.8));
    border-radius: 0.5rem;
    > p {
      position: absolute;
      bottom: 2rem;
      width: 90%;
      left: 2rem;
      color: #fff;
      font-size: 1.5rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
