const chalk = require('chalk');
const fs = require('fs');

const getNotes = () => {
    console.log('getting notes..');
}

const addNote = (title, body) => {
    const note = loadNotes();
    const duplicate = note.find((element) => element.title === title);
    if (!duplicate) {
        note.push({ title, body });
        saveNotes(note);
        console.log(chalk.green.inverse("New note Added !!"))
    } else {
        console.log(chalk.red.inverse("Note title taken !!"));
    }
}

const removeNote = (title) => {
    const note = loadNotes();
    const notePresent = note.filter((element) => element.title !== title);

    if (note.length !== notePresent.length) {
        saveNotes(notePresent);
        console.log(chalk.green.inverse("Note Removed !!"));
    } else {
        console.log(chalk.red.inverse("Note title Absent !!"));
    }
}

const ListNotes = () => {
    const note = loadNotes();
    if (note.length !== 0) {
        let i = 1;
        console.log(chalk.white.inverse("Your Notes : -"));
        note.forEach((element) => {
            console.log(i++ + ". " + element.title);
        });
    } else {
        console.log(chalk.red.inverse("No Notes Are Present..."))
    }
}

const readNote = (title) => {
    const note = loadNotes();
    const get = note.find((e) => e.title === title);
    if (get) {
        const getNote = note.filter((e) => e.title === title);
        console.log(chalk.white.inverse("Title : - " + getNote[0].title + " "));
        console.log("Body : - " + getNote[0].body);
    } else {
        console.log(chalk.red.inverse("Note not found !!"));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataString = fs.readFileSync('notes.json').toString();
        return JSON.parse(dataString);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    ListNotes,
    readNote
};