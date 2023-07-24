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
  // Add more train schedules...
];

const trainScheduleTable = document.getElementById('trainSchedule');

function displayTrainSchedule() {
  trainScheduleData.forEach((train) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${train.trainNumber}</td>
      <td>${train.departureTime}</td>
      <td>${train.destination}</td>
    `;
    trainScheduleTable.appendChild(row);
  });
}

displayTrainSchedule();
