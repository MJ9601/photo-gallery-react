import React, { useState } from "react";
import styled from "styled-components";

const CreatePost = () => {
  const [addField, setAddField] = useState(false);
  return (
    <Wrap>
      <Form addField={addField}>
        <Label htmlFor="inputFile">
          Upload Image <div>+</div>
        </Label>
        <input type="file" id="inputFile" style={{ display: "none" }} />
        <textarea type="text" placeholder="Description" />
        <Button> Publish Picture</Button>
      </Form>
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
    width: 30rem;
    background-color: #eee;
    border-radius: 0.3rem;
    min-height: 5rem;
    font-size: 1.5rem;
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
