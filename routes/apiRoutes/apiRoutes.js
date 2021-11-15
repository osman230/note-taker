const fs = require('fs');
const {
    v4: uuidv4
} = require('uuid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            res.json(notes);
        });
    });

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        newNote.id = uuidv4();

        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            const notes = JSON.parse(data);
            notes.push(newNote)

            fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
                if (err) throw err;
                res.json(newNote);
            });
        });
    })

    app.delete('/api/notes/:noteId', (req, res) => {
        const chosen = req.params.noteId
        console.log(chosen)

        fs.readFile('./db/db.json', (err,data) => {
            if(err) throw err;
            const notes = JSON.parse(data);
            console.log(notes)

            const newNotesArray = notes.filter(({id}) => id !== chosen);

            console.log(newNotesArray);

            fs.writeFile('./db/db.json', JSON.stringify(newNotesArray), (err) => {
                if(err) throw err;
                res.json(newNotesArray)
            });
        });
    });
}