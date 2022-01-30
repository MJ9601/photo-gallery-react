import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalState } from "../globalStateProvider";
import ProgressBar from "./ProgressBar";

const CreatePost = () => {
  const [{ addPost }, dispatch] = useGlobalState();
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [active, setActive] = useState(false);
  const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

  const handleClick = (e) => {
    e.preventDefault();
    if (file && allowedTypes.includes(file.type)) {
      setError("");
      setActive(true);
      dispatch({ type: "TOGGLE_ADD_POST" });
    } else {
      setFile(null);
      setError("Please submit correct format");
    }
  };
  return (
    <Wrap>
      <Form addField={addPost}>
        <Label htmlFor="inputFile">
          Upload Image <div>+</div>
        </Label>
        <input
          type="file"
          id="inputFile"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <textarea
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Button onClick={handleClick}> Publish Picture</Button>
        {(file || error) && (
          <ErrorDis error={error} file={file}>
            {error ? error : file.name}
          </ErrorDis>
        )}
      </Form>
      {active && (
        <ProgressBar
          file={file}
          setFile={setFile}
          setActive={setActive}
          desc={desc}
          setDesc={setDesc}
        />
      )}
    </Wrap>
  );
};

export default CreatePost;

const Wrap = styled.div`
  display: grid;
  place-items: center;
`;

const Form = styled.form`
  display: ${(props) => (props.addField ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  > textarea {
    border: none;
    padding: 0.5rem 1rem;
    width: 60rem;
    background-color: #eee;
    border-radius: 0.3rem;
    min-height: 5rem;
    font-size: 1.5rem;
    @media (max-width: 734px) {
      width: 30rem;
    }
    &:focus {
      outline: none;
    }
  }
`;
const Label = styled.label`
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1.5rem;
  gap: 1rem;
  > div {
    font-size: 2rem;
    border: 0.3rem solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    hieght: 3rem;
    width: 3.5rem;
    padding-bottom: 0.4rem;
    transition: all 0.3s ease;
  }
  &:hover {
    > div {
      background-color: #000;
      color: #fff;
    }
  }
`;
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
  margin-top: 2rem;
  &:hover {
    background-color: transparent;
    color: rgba(0, 250, 255, 0.8);
  }
`;
const ErrorDis = styled.h2`
  padding: 1rem 0;
  font-size: 1.6rem;
  text-align: center;
  color: ${(props) => (props.error ? "red" : "green")};
`;
