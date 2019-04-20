import axios from "axios";

export default {
  // Gets all pools
  getPlayers: function() {
    return axios.get("/api/player");
  },
  // Gets the pool with the given id
  getPlayer: function(id) {
    return axios.get("/api/player/" + id);
  },
  // Deletes the pool with the given id
  deletePlayer: function(id) {
    return axios.delete("/api/player/" + id);
  },
  // Saves a pool to the database
  savePlayers: function(playerData) {
    console.log(playerData);
    return axios.post("/api/player", playerData);
  },
  updatePlayer: function(id, playerData) {
    return axios.put("/api/player/" + id, playerData);
  },
};
