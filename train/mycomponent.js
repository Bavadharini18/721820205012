
import React from 'react';

const mycomponent = () => {
  const trainScheduleData = [
    {
      trainNumber: 'T123',
      departureTime: '09:00 AM',
      destination: 'City A',
    },
    {
      trainNumber: 'T456',
      departureTime: '10:30 AM',
      destination: 'City B',
    },
  ];

  return (
    <div>
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Departure Time</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {trainScheduleData.map((train, index) => (
            <tr key={index}>
              <td>{train.trainNumber}</td>
              <td>{train.departureTime}</td>
              <td>{train.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainSchedule;
