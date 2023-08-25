import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AirportSearchPage from '../pages/AirportSearchPage';
import RandomPickerPage from '../pages/RandomPickerPage';

const Main = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/randomstandup' element={<RandomPickerPage />}></Route>
          <Route path='/randomstandup/airportSearch' element={<AirportSearchPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;