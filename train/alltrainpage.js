import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrainsData = async () => {
      try {
      } catch (error) {
        console.error('Error fetching trains data:', error);
      }
    };

    fetchTrainsData();
  }, []);

  return (
    <div>
      {/* Display train schedules and other information here */}
    </div>
  );
};

export default AllTrainsPage;