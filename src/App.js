import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import { GlobalStyles } from "./GlobalStyles";
import { Container } from './styles'


function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <MainPage />
        <Footer />
      </Container>
    </>
  );
}

export default App;
