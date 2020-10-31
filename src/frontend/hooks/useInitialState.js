import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [vehicles, setVehicles] = useState({ favoritos: [], vehiculos: [], viewing: [] });
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVehicles(data));
  }, []);
  return vehicles;
};
export default useInitialState;
