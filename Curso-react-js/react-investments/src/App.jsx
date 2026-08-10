import Header from "./components/Header";
import Investments from "./components/Investments";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />

      <Main>
        <Investments />
      </Main>
    </>
  );
}

export default App;
