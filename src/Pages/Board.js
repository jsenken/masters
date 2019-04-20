import React, { Component } from "react";
import API from "../utils/API";
import Button from "../Components/Button/Button";
import { Input, FormBtn } from "../Components/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          key: 1,
          rank: 2,
          name: "Tony Finau",
          score: "-11",
          thru: "F",
          today: "-2",
          R1: 71,
          R2: 70,
          R3: 64,
          R4: "",        },
        {
          key: 2,
          rank: 7,
          name: "Louis Oosthuizen",
          score: "-8",
          thru: "F",
          today: "-1",
          R1: 71,
          R2: 66,
          R3: 71,
          R4: "",        },
        {
          key: 4,
          rank: 14,
          name: "Jon Rahm",
          score: "-6",
          thru: "F",
          today: "-1",
          R1: 69,
          R2: 70,
          R3: 71,
          R4: "",        },

        {
          key: 5,
          rank: 5,
          name: "Ian Poulter",
          score: "-9",
          thru: "F",
          today: "-4",
          R1: 68,
          R2: 71,
          R3: 68,
          R4: "",        },
        {
          key: 6,
          rank: 12,
          name: "Adam Scott",
          score: "-7",
          thru: "F",
          today: "E",
          R1: 69,
          R2: 68,
          R3: 72,
          R4: "",        },
        {
          key: 7,
          rank: 5,
          name: "Webb Simpson",
          score: "-9",
          thru: "F",
          today: "-8",
          R1: 72,
          R2: 71,
          R3: 64,
          R4: "",        },
        {
          key: 8,
          rank: 7,
          name: "Xander Schauffele",
          score: "-8",
          thru: "F",
          today: "-2",
          R1: 73,
          R2: 65,
          R3: 70,
          R4: "",        },
        {
          key: 9,
          rank: 22,
          name: "Tommy Fleetwood",
          score: "-4",
          thru: "F",
          today: "-2",
          R1: 71,
          R2: 71,
          R3: 70,
          R4: "",        },
        {
          key: 10,
          rank: 2,
          name: "Tiger Woods",
          score: "-11",
          thru: "F",
          today: "-5",
          R1: 70,
          R2: 68,
          R3: 67,
          R4: "",        },
        {
          key: 11,
          rank: 12,
          name: "Rickie Fowler",
          score: "-7",
          thru: "F",
          today: "-4",
          R1: 70,
          R2: 71,
          R3: 68,
          R4: "",        },

        {
          key: 12,
          rank: 7,
          name: "Matt Kuchar",
          score: "-8",
          thru: "F",
          today: "-4",
          R1: 71,
          R2: 69,
          R3: 68,
          R4: "",         },
        {
          key: 13,
          rank: 1,
          name: "Francesco Molinari",
          score: "-13",
          thru: "F",
          today: "-6",
          R1: 70,
          R2: 67,
          R3: 66,
          R4: "",        },

        {
          key: 14,
          rank: 14,
          name: "Patrick Cantlay",
          score: "-8",
          thru: "F",
          today: "-6",
          R1: 73,
          R2: 74,
          R3: 64,
          R4: "", 
        },
        {
          key: 15,
          rank: 7,
          name: "Dustin Johnson",
          score: "-8",
          thru: "F",
          today: "-2",
          R1: 68,
          R2: 70,
          R3: 70,
          R4: "",        },
        {
          key: 16,
          rank: 14,
          name: "Justin Thomas",
          score: "-6",
          thru: "F",
          today: "-3",
          R1: 73,
          R2: 68,
          R3: 69,
          R4: "",         },
        {
          key: 17,
          rank: 14,
          name: "Phil Mickelson",
          score: "-6",
          thru: "F",
          today: "-2",
          R1: 67,
          R2: 73,
          R3: 70,
          R4: "",        },
        {
          key: 18,
          rank: 4,
          name: "Brooks Koepka",
          score: "-10",
          thru: "F",
          today: "-3",
          R1: 66,
          R2: 71,
          R3: 69,
          R4: "",        },
        {
          key: 19,
          rank: 31,
          name: "Marc Leishman",
          score: "-2",
          thru: "F",
          today: "-2",
          R1: 72,
          R2: 72,
          R3: 70,
          R4: "",        },
        {
          key: 20,
          rank: 31,
          name: "Charley Hoffman",
          score: "-2",
          thru: "F",
          today: "E",
          R1: 71,
          R2: 71,
          R3: 72,
          R4: "",        },
        {
          key: 21,
          rank: 43,
          name: "Jimmy Walker",
          score: "E",
          thru: "F",
          today: "E",
          R1: 72,
          R2: 72,
          R3: 72,
          R4: "",        },
        {
          key: 22,
          rank: 20,
          name: "Bubba Watson",
          score: "-5",
          thru: "F",
          today: "-5",
          R1: 72,
          R2: 72,
          R3: 67,
          R4: "",        },
        {
          key: 23,
          rank: 31,
          name: "Bryson DeChambeau",
          score: "-2",
          thru: "F",
          today: "+1",
          R1: 66,
          R2: 75,
          R3: 73,
          R4: "",        },
        {
          key: 24,
          rank: 14,
          name: "Jason Day",
          score: "-6",
          thru: "F",
          today: "+1",
          R1: 70,
          R2: 67,
          R3: 73,
          R4: "",        },
        {
          key: 25,
          rank: "100",
          name: "Justin Rose",
          score: "MC",
          thru: "MC",
          today: "MC",
          R1: 75,
          R2: 73,
          R3: 82,
          R4: 82,        },
        {
          key: 26,
          rank: 22,
          name: "Jordan Spieth",
          score: "-4",
          thru: "F",
          today: "-3",
          R1: 75,
          R2: 68,
          R3: 69,
          R4: "",        },
        {
          key: 27,
          rank: 57,
          name: "Eddie Pepperell",
          score: "+3",
          thru: "F",
          today: "E",
          R1: 74,
          R2: 73,
          R3: 72,
          R4: "",        },
        {
          key: 28,
          rank: "100",
          name: "Sergio Garcia",
          score: "MC",
          thru: "MC",
          today: "MC",
          R1: 73,
          R2: 75,
          R3: 82,
          R4: "",        },
        {
          key: 29,
          rank: 47,
          name: "Patrick Reed",
          score: "+1",
          thru: "F",
          today: "+2",
          R1: 73,
          R2: 70,
          R3: 74,
          R4: "",        },
        {
          key: 30,
          rank: 25,
          name: "Cameron Smith",
          score: "-3",
          thru: "F",
          today: "-3",
          R1: 70,
          R2: 74,
          R3: 69,
          R4: "",        },
        {
          key: 31,
          rank: 65,
          name: "Alex Noren",
          score: "+6",
          thru: "F",
          today: "+3",
          R1: 75,
          R2: 72,
          R3: 75,
          R4: "",        },
        {
          key: 32,
          rank: 39,
          name: "Keegan Bradley",
          score: "-1",
          thru: "F",
          today: "-1",
          R1: 76,
          R2: 68,
          R3: 71,
          R4: "",        },
        {
          key: 33,
          rank: 63,
          name: "Billy Horschel",
          score: "+5",
          thru: "F",
          today: "+2",
          R1: 72,
          R2: 75,
          R3: 74,
          R4: "",        },
        {
          key: 34,
          rank: 31,
          name: "Kevin Kisner",
          score: "-2",
          thru: "F",
          today: "+1",
          R1: 69,
          R2: 73,
          R3: 72,
          R4: "",        },
        {
          key: 35,
          rank: 61,
          name: "Zach Johnson",
          score: "+4",
          thru: "F",
          today: "+1",
          R1: 74,
          R2: 73,
          R3: 73,
          R4: "",        },
        {
          key: 36,
          rank: "100",
          name: "Paul Casey",
          score: "MC",
          thru: "MC",
          today: "MC",
          R1: 81,
          R2: 73,
          R3: 82,
          R4: 82,        },
        {
          key: 37,
          rank: 25,
          name: "Henrik Stenson",
          score: "-5",
          thru: "F",
          today: "-3",
          R1: 74,
          R2: 72,
          R3: 67,
          R4: "",        },
        {
          key: 38,
          rank: 39,
          name: "Rory McIlroy",
          score: "-1",
          thru: "F",
          today: "-1",
          R1: 73,
          R2: 71,
          R3: 71,
          R4: "",        },
        {
          key: 39,
          rank: "100",
          name: "Brandt Snedeker",
          score: "MC",
          thru: "MC",
          today: "MC",
          R1: 75,
          R2: 74,
          R3: 82,
          R4: "",        },
        {
          key: 40,
          rank: 25,
          name: "Hideki Matsuyama",
          score: "-4",
          thru: "F",
          today: "-3",
          R1: 75,
          R2: 70,
          R3: 68,
          R4: "",        },

        {
          key: 41,
          rank: "100",
          name: "Fred Couples",
          score: "MC",
          thru: "MC",
          today: "MC",
          R1: 78,
          R2: 71,
          R3: 82,
          R4: "",        },

      ]
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(event){
    let players = this.state.players.slice();
    // console.log(event.target)
    for(let i = 0; i < players.length; i++){
      // console.log(players[i].name)
      // console.log(event.target.name)
      if(players[i].name == event.target.name){
        if (event.target.placeholder === "rank"){
          players[i].rank = event.target.value;
        } else if (event.target.placeholder === "score"){
          players[i].score = event.target.value;
        } else if (event.target.placeholder === "thru"){
          players[i].thru = event.target.value;
        } else if (event.target.placeholder === "today"){
          players[i].today = event.target.value;
        } else if (event.target.placeholder === "R4"){
          players[i].R4 = event.target.value;
        }
          this.setState ({players});
          break;
      }
  }
  };

  renderRow = (player, i) => {
    return(
      <tr className="table-light" key={ player.id }>
          <th>
            <input
              onBlur={ this.saveModule }
              value={ player.rank }
              name={player.name}
              placeholder= "rank"
              onChange={ this.handleInputChange }
            />
          </th>
          <th>{player.name}</th>
          <th>
            <input
              onBlur={ this.saveModule }
              value={player.score}
              onChange={this.handleInputChange}
              name={player.name}
              placeholder="score"
            />
          </th>                  
          <th>
            <input
              onBlur={ this.saveModule }
              value={player.thru}
              onChange={this.handleInputChange}
              name={player.name}
              placeholder="thru"
              />
          </th>                  
          <th>
            <input
              onBlur={ this.saveModule }
              value={player.today}
              onChange={this.handleInputChange}
              name={player.name}
              placeholder="today"
            />
          </th>                  
          <th scope="col">{player.R1}</th>
          <th scope="col">{player.R2}</th>
          <th scope="col">{player.R3}</th>
          <th>
          <input
            value={player.R4}
            onChange={this.handleInputChange}
            name={player.name}
            placeholder="R4"
          />
          </th>                  
      </tr>
    )
}

  handleFormSubmit = event => {
    event.preventDefault();
    API.savePlayers({
      playerData: this.state.players
    })
      .then(res => this.loadPools())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="famContainer">
        <Row>
          <span id="dialogue"> </span>
        </Row>
        <Row>
          <table className="table table-bordered">
            <thead>
            <tr className="table-light">
                  <th> Rank </th>
                  <th> Name</th>
                  <th> Score</th>
                  <th> Thru</th>
                  <th> Today</th>
                  <th> R1 </th>
                  <th> R2 </th>
                  <th> R3 </th>
                  <th> R4 </th>
                </tr>
            </thead>
            <tbody>
              { this.state.players.map(this.renderRow) }
            </tbody>
          </table>
        </Row>
        <Row>
          <Button onClick={this.handleFormSubmit}> Submit </Button>
        </Row>
      </Container>
    );
  }
}

export default Board;
