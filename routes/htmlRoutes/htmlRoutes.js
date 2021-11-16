
const path = require('path');
const app = express();

//
module.exports = function(app) {
    
    app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
    });

    app.get('/notes', function(req, res)  {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
    });

};