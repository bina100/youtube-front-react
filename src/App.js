import { useState } from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import styled, { ThemeProvider } from "styled-components";
import { darkTeme, lightTeme } from "./utils/Theme";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 20px 10px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTeme : lightTeme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
