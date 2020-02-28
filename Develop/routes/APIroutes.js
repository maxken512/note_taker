const notedata = require("../db/db.json")

module.exports = function(app) {
   
    app.get('/api/notes', function(req, res) {
      res.json(notedata);
    });

    app.post('/api/notes', function(req, res){
        notedata.push(req.body);
        res.json(notedata);
    })
}
