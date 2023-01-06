const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exp',
  rocket: 'Explorer IS1',
  launchDate: new Date('Dec 27, 2030'),
  destination: 'Kepler-442 b',
  customer: [NASA, ZTM],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
