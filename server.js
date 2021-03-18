// const validator = require('validator');
const yargs = require('yargs');
// const chalk = require('chalk');
const notes = require('./notes');


// customise version
yargs.version('1.1.0');

//add command
yargs.command({
    command: 'add',
    describe: 'Adding a Note..',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})

//remove commmand
yargs.command({
    command: 'remove',
    describe: 'Removing a Note..',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'Listing your Notes..',
    handler: () => {
        notes.ListNotes();
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'Reading your Notes..',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
})

yargs.parse();