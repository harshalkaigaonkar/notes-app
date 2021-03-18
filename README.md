# Notes-App

This a Node.js Web App using Yargs for the terminal Commands .
And A File notes.json in which notes are saved using file-system module for node.js .

### Installing Node Modules

`npm install`

### Yargs Commands

1. `node server.js add --title="Some_title_that_is_not_in_notes.json_file" --body="body_for_that_title"`

for adding a note in the json file.

2. `node server.js remove --title="Some_title_that_is_in_notes.json_file"`

for removing a note from the json file.

3. `node server.js list`

for listing titles of all the notes present in notes file.

4. `node server.js read --title="Some_title_that_is_in_notes.json_file"`

for getting a particular note with its title and body.
