import styled from "styled-components";
import Card from "./components/Card";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <CreatePost />
      <Wrap>
        <Card />
      </Wrap>
    </div>
  );
}

export default App;

const Wrap = styled.div``;
