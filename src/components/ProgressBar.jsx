import React from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { useStorage, useWriteToDatabase } from "../customeHooks";

const ProgressBar = ({ file, setFile, setActive, desc, setDesc }) => {
  const { url, progress } = useStorage(file);
  useWriteToDatabase(url, desc);

  useEffect(() => {
    if (progress == 100) {
      setActive(false);
      setFile(null);
      setDesc("");
    }
  }, [url]);
  return (
    <Wrap>
      <ProgressBarWrap>
        <CurrentProgress progress={progress}></CurrentProgress>
      </ProgressBarWrap>
      <h2>{progress.toFixed(2)} %</h2>
    </Wrap>
  );
};

export default ProgressBar;
const Wrap = styled.div`
  margin: 1rem 0;
  width: 100%;
  text-align: center;
`;
const ProgressBarWrap = styled.div`
  width: 100%;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  padding: 0.1rem 0;
  border-radius: 0.7rem;
`;
const CurrentProgress = styled.div`
  width: ${(props) => props.progress}%;
  background-color: red;
  padding: 0.3rem 0;
  border-radius: 0.7rem;
`;
