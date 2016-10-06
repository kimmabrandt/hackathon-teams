//require
var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');

//global var
var router = express.Router();

//route definitions
router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);

  res.redirect('/teams');
});                                                                                                                                                       

router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});





//Get the edit form
router.get("/edit/:name", function(req, res){
	var team = teamService.getTeam(req.params.name);

	res.render("index", { team:team });
});


// Update the team
router.put("/team/:name", function(req, res){
	teamService.editTeam(req.params.name, req.body);

	res.send({ message: "success" });
});


// Delete the team
router.delete("/delete/:name", function(req, res){
	teamService.deleteTeam(req.params.name);
	res.send({ message: "success" }); 
});




module.exports = router;
