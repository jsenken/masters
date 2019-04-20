import React, { Component } from "react";
// import update from 'react-addons-update'; // ES6
import Button from "../Components/Button/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./fam.css";


class Fam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          key: 1,
          name: "Darren",
          color: "table-warning",
          rank: 1,
          comRanks: 0,
          score: 0,
          totalScore: 0,
          status: "notStarted",
          R1: 0,
          R2: 0,
          R3: 0,
          R4: 0,
          bonus: 0,
          members: [
            {
              key: 1,
              name: "Rickie Fowler",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",
            },
            {
              key: 2,
              name: "Matt Kuchar",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 3,
              name: "Bryson DeChambeau",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key:4,
              name: "Kevin Kisner",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            }
          ]
        },
        {
          key: 2,
          name: "Noah",
          color: "table-primary",
          rank: 5,
          comRanks: 0,
          score: 0,
          totalScore: 0,
          status: "notStarted",
          R1: 0,
          R2: 0,
          R3: 0,
          R4: 0,
          bonus: 0,
          members: [
            {
              key: 1,
              name: "Tiger Woods",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 2,
              name: "Brooks Koepka",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 3,
              name: "Hideki Matsuyama",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 4,
              name: "Henrik Stenson",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",
            }
          ]
        },
        {
          key: 3,
          name: "Jordan",
          color: "table-danger",
          rank: 2,
          comRanks: 0,
          score: 0,
          totalScore: 0,
          status: "notStarted",
          R1: 0,
          R2: 0,
          R3: 0,
          R4: 0,
          bonus: 0,
          members: [
            {
              key: 1,
              name: "Justin Rose",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 2,
              name: "Tony Finau",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key:3,
              name: "Paul Casey",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 4,
              name: "Louis Oosthuizen",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            }
          ]
        },
        {
          key: 4,
          name: "Kendall",
          color: "orange",
          rank: 6,
          comRanks: 0,
          score: 0,
          totalScore: 0,
          status: "notStarted",
          R1: 0,
          R2: 0,
          R3: 0,
          R4: 0,
          bonus: 0,
          members: [
            {
              key: 1,
              name: "Dustin Johnson",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 2,
              name: "Jon Rahm",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 3,
              name: "Bubba Watson",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 4,
              name: "Adam Scott",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            }
          ]
        },
        {
          key: 5,
          name: "Duley",
          color: "table-info",
          rank: 7,
          comRanks: 0,
          score: 0,
          totalScore: 0,
          status: "notStarted",
          R1: 0,
          R2: 0,
          R3: 0,
          R4: 0,
          bonus: 0,
          members: [
            {
              key: 1,
              name: "Rory McIlroy",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 2,
              name: "Tommy Fleetwood",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key:3,
              name: "Francesco Molinari",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 4,
              name: "Xander Schauffele",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            }
          ]
        },
        {
          key: 6,
          name: "Tym",
          color: "table-info",
          rank: 8,
          comRanks: 0,
          score: 0,
          totalScore: 0,
          status: "notStarted",
          R1: 0,
          R2: 0,
          R3: 0,
          R4: 0,
          bonus: 0,
          members: [
            {
              key:1,
              name: "Justin Thomas",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 2,
              name: "Jordan Spieth",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 3,
              name: "Jason Day",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            },
            {
              key: 4,
              name: "Phil Mickelson",
              rank: "",
              score: "",
              thru: "",
              today: "",
              R1: "",
              R2: "",
              R3: "",
              R4: "",            }
          ]
        },
      ],
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
    };
  }
  componentDidMount() {
    let updateData = [];
    let updatePlayer = [];
    let updateTeam = [];
    this.state.teams.map((item, index) => {
      item.members.map((member,ind) => {
        // console.log(member.name)
        var player = member.name;
        for (var j = 0; j < this.state.players.length; j++){
          if (this.state.players[j].name === player){
            // console.log(this.state.players[j].name + " equals " + player);
            member.rank = this.state.players[j].rank;
            member.score = this.state.players[j].score;
            member.thru = this.state.players[j].thru;
            member.today = this.state.players[j].today;
            member.R1 = this.state.players[j].R1;
            member.R2 = this.state.players[j].R2;
            member.R3 = this.state.players[j].R3;
            member.R4 = this.state.players[j].R4;
            updatePlayer.push({
              key: member.key+1,
              rank: member.rank,
              name: member.name,
              score: member.score,
              thru: member.thru,
              today: member.today,
              R1: member.R1,
              R2: member.R2,
              R3: member.R3,
              R4: member.R4,
            })
          }
        }
      });
      this.setState({members: updatePlayer},()=> {
      console.log(this.state)
      }) 
      let comRank = 0;
      let score = 0;
      let R1 = 0;
      let R2 = 0;
      let R3 = 0;
      let R4 = 0;
      let B = 0;
      for( var k =0; k < item.members.length; k++){
        comRank = comRank + parseInt(item.members[k].rank);
        R1 = R1 + parseInt(item.members[k].R1);
        R2 = R2 + parseInt(item.members[k].R2);
        R3 = R3 + parseInt(item.members[k].R3);
        R4 = R4 + parseInt(item.members[k].R4);
        // score = R1 + R2 + R3 + R4;
        score = R1 + R2+ R3;
        if (item.members[k].rank === parseInt(1)){
          B = B - 10;
        } else if (item.members[k].rank <= 10){
          B = B - 5;
        } else if (item.members[k].rank <= 20){
          B = B - 2;
        }
        // console.log(item.members[k].name + " " + R1 + " + "+ R2 +" + "+ B)
      }
      let total = score + B
      // console.log(item.name+ " = " + total);

      updateData.push({
        key: item.key+1,
        name: item.name,
        color: item.color, 
        rank: item.rank, 
        comranks: comRank, 
        score: item.score, 
        totalScore: total, 
        status: item.status, 
        R1: R1, 
        R2: R2, 
        R3: R3, 
        R4: R4, 
        bonus: B, 
        members: item.members

      });
      this.setState({teams: updateData})
    })
  


  }
  
  updatePlayers = () => {
    
  }


  updateRank = () => {
    var array = []
    this.state.teams.map((item, index) => {
      array.push(item.totalScore)
    })
    console.log(array)
    array.sort()
    console.log(array)
    var newArr = [];
    for (var l = 0; l < array.length; l++) {
      console.log(this.state.teams[l].name + " " );
      newArr.push()
    }

  }

    // for (var h = 0; h < this.state.teams.length; h++) {
    //   for (var i = 0; i < this.state.teams[h].members.length; i++) {
    //     var player = this.state.teams[h].members[i].name;
    //     // console.log([player]);
    //     for (var j = 0; j < this.state.players.length; j++) {
    //       if (this.state.players[j].name === player) {
    //         // console.log(this.state.players[j].name + " equals " + player);
    //         var rank = this.state.players[j].rank;
    //         var score = this.state.players[j].score;
    //         var thru = this.state.players[j].thru;
    //         var today = this.state.players[j].today;
    //         var round = this.state.players[j].round;
    //         this.setState({
    //           teams: update(this.state.teams[h].members[i], {R1: {$set:61}} 
    //         )})
    //         // this.state.teams[h].members[i].rank = rank;
    //         // this.state.teams[h].members[i].score = score;
    //         // this.state.teams[h].members[i].thru = thru;
    //         // this.state.teams[h].members[i].today = today;
    //         // this.state.teams[h].members[i].R1 = round;
    //       }
    //     }
    //     // console.log(this.state.teams[h].members[i]);
    //   }
  //     var teamRank = 0;
  //     var teamR1 = 0;
  //     for (var k = 0; k < this.state.teams[h].members.length; k++) {
  //       // console.log(
  //       //   this.state.teams[h].members[k].name +
  //       //     " " +
  //       //     this.state.teams[h].members[k].rank
  //       // );
  //       teamRank = teamRank + parseInt(this.state.teams[h].members[k].rank);
  //       teamR1 = teamR1 + parseInt(this.state.teams[h].members[k].R1);
  //       // console.log(this.state.teams[h].members[k].R1);
  //     }
  //     // console.log(this.state.teams[h].name + " rank is " + teamRank);
  //     this.state.teams[h].comRanks = teamRank;
  //     this.state.teams[h].R1 = teamR1;
  //   }
  //   console.log(this.state.teams);
  // };

  render() {
    const myData = this.state.teams.sort(compareValues("comRanks"));
    function compareValues(key, order = "asc") {
      return function(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          return 0;
        }
        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }

        return order == "desc" ? comparison * -1 : comparison;
      };
    }
    let counter = 0;
    function increase() {
      counter = counter + 1;
      return counter;
    }

    return (
      <Container className="famContainer">
        <Row className="title">
          <Col md={2} />
          <Col md={8}>
            <h2>Masters Pool Tracker</h2>
          </Col>
          <Col md={2} />
        </Row>
        <Row>
          {" "}
          <Button id="update" onClick={this.updateRank}>
            Update
          </Button>
        </Row>
        <Row className="leaderBoard">
          <table class="table table-bordered">
            <thead>
              <tr class="blankSpace">
                <th scope="col" className="table-light" />
                <th scope="col" className="table-light">
                  Captain
                </th>
                <th scope="col" className="table-light">
                  R1
                </th>
                <th scope="col" className="table-light">
                  R2
                </th>
                <th scope="col" className="table-light">
                  R3
                </th>
                <th scope="col" className="table-light">
                  R4
                </th>
                <th scope="col" className="table-light">
                  B
                </th>
                <th scope="col" className="table-light">
                  T
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.teams.map(team => (
                <tr className="table-light">
                  <th> {increase({ counter })} </th>
                  <th scope="col">
                    <Button className={team.name + "title name"}>
                      {team.name}
                    </Button>
                  </th>
                  <th scope="col" id={team.status}>
                    {team.R1}
                  </th>
                  <th scope="col">{team.R2}</th>
                  <th scope="col">{team.R3}</th>
                  <th scope="col">{team.R4}</th>
                  <th scope="col">{team.bonus}</th>
                  <th scope="col">{team.totalScore}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </Row>
        <br />
        <Row>
          <span id="dialogue"> </span>
        </Row>
        <Row>
          <table class="table table-bordered">
            <thead>
              <tr class="blankSpace">
                <th scope="col" className="table-light">
                  Rank
                </th>
                <th scope="col" className="table-light">
                  Player
                </th>
                <th scope="col" className="table-light">
                  Score
                </th>
                <th scope="col" className="table-light">
                  Thru
                </th>
                <th scope="col" className="table-light">
                  Today
                </th>
                <th scope="col" className="table-light">
                  Round
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.players
                // .filter(player => player.team === "Moga")
                .map(player => (
                  <tr className="table-light">
                    <th> {player.rank} </th>
                    <th scope="col">{player.name}</th>
                    <th scope="col">{player.score}</th>
                    <th scope="col">{player.thru}</th>
                    <th scope="col">{player.today}</th>
                    <th scope="col">{player.round}</th>
                  </tr>
                ))}
              <tr className="table-light" />
              <tr />
            </tbody>
          </table>
        </Row>
      </Container>
    );
  }
}

export default Fam;
