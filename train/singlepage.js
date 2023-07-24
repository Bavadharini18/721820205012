import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SingleTrainPage = ({ match }) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchSingleTrainData = async () => {
      try {
       
      } catch (error) {
        console.error('Error fetching single train data:', error);
      }
    };

    fetchSingleTrainData();
  }, [match.params.trainId]);

  return (
    <div>
      </div>
  );
};

export default SingleTrainPage;

