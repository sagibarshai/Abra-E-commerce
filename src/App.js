import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/components/Header';
const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
