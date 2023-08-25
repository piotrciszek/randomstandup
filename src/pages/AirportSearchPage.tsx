import React, { FC } from 'react';
import AirportSearch from '../components/AirportSearch';

const AirportSearchPage: FC = () => {
  return (
    <div>
      <h1>Airport Search</h1>
      <AirportSearch />
      {/* Display search results if needed */}
    </div>
  );
};

export default AirportSearchPage;