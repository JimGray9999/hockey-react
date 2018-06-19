import axios from 'axios';

export function getTeams() {

  const teamStdgs = 'https://api.mysportsfeeds.com/v1.2/pull/nhl/2018-playoff/overall_team_standings.json';

  const params = {
    headers: 
      { Authorization: process.env.REACT_APP_MSF_AUTH },
      qs: { teamstats: 'W,L,GF,GA,Pts' }
  };

  const standings = [];

  function Team(name, city, gamesPlayed, wins, losses, goalsFor, goalsAgainst) {
    this.city = city;
    this.name = name;
    this.gamesPlayed = gamesPlayed;
    this.wins = wins;
    this.losses = losses;
    this.goalsFor = goalsFor;
    this.goalsAgainst = goalsAgainst;
  }

  axios.get(teamStdgs, params)
    .then(response => {
      // assign data to consts
      
      const data = response.data.overallteamstandings;
      const lastUpdate = data.lastUpdatedOn;
      const name = data.teamstandingsentry[0].team.Name;
      const city = data.teamstandingsentry[0].team.City;
      const gamesPlayed = data.teamstandingsentry[0].stats.GamesPlayed['#text'];
      const wins = data.teamstandingsentry[0].stats.stats.Wins['#text'];
      const losses = data.teamstandingsentry[0].stats.stats.Losses['#text'];
      const goalsFor = data.teamstandingsentry[0].stats.stats.GoalsFor['#text'];
      const goalsAgainst = data.teamstandingsentry[0].stats.stats.GoalsAgainst['#text'];

      let newTeam = new Team(name, city, gamesPlayed, wins, losses, goalsFor, goalsAgainst);

      standings.push(newTeam);

  })
  // display an error in the console if error occured
    .catch(function(error) {
      console.log(error);
  });

  return standings;
}