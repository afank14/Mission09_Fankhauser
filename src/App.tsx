import React from 'react';
// import the data from the json file
import jsonData from './CollegeBasketballTeams.json';
import './App.css';

// Add an interface for a team
interface TeamProps {
  // it will be using these 4 features from the CollegBasketballTeams.json file
  school: string;
  name: string;
  city: string;
  state: string;
}

// Add a welcome function for the header
function Welcome() {
  return (
    <div>
      <h1>NCAA March Madness</h1>
      <h3>The following teams are hoping for a spot in the big dance!</h3>
    </div>
  );
}

// Let's build a component for the team cards that extends as a component using the TeamProps interface
class Team extends React.Component<TeamProps> {
  render() {
    // Create a variable and set it as a component property
    const singleTeam = this.props;
    return (
      // return the relevant information in a div calling the team-card class in App.css
      <div className="team-card">
        <h2>{singleTeam.school}</h2>
        <h3>Mascot: {singleTeam.name}</h3>
        <h3>
          Location: {singleTeam.city}, {singleTeam.state}
        </h3>
      </div>
    );
  }
}

// Create a function to build the team list
function TeamList() {
  return (
    // Drill down to the teams list and map all the teams
    // then spread that team to the Team component
    // and put it in a div of class team-list from App.css
    <div className="team-list">
      {jsonData.teams.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    // Call the welcome and teamlist functions to display on the page
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
