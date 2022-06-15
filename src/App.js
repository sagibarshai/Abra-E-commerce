import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/components/Header';
import Hello1 from './layout/components/Hello1';
const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<Hello1 />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
