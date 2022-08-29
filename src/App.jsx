import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
