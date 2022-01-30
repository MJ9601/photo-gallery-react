import styled from "styled-components";
import Card from "./components/Card";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import Modul from "./components/Modul";
import { useDatabase } from "./customeHooks";
import { useGlobalState } from "./globalStateProvider";

function App() {
  const { images } = useDatabase();
  const [{ selectedPic }] = useGlobalState();
  return (
    <div className="app">
      <Container>
        <Header />
        <CreatePost />
        <Wrap>
          {images.map((img) => (
            <Card key={img.id} src={img.url} desc={img.desc} />
          ))}
        </Wrap>
      </Container>
      {selectedPic && <Modul />}
    </div>
  );
}

export default App;
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  @media (max-width: 640px) {
    width: 98%;
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
