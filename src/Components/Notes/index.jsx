import React, { Component } from "react";
import "./style.css";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class Notes extends Component {
  constructor() {
    super();

    this.state = {
      notes: [
        {
          id: 1,
          title: "My note 1"
        },
        {
          id: 2,
          title: "My note 2"
        },
        {
          id: 3,
          title: "My note 3"
        }
      ]
    };
  }

  renderNotes = notes => (
    <ul>
      {notes.map((note, key) => (
        <li key={key}>
          <Link to={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );

  render() {
    // Let's see what contains our props object.
    console.log(this.props);
    // We got the noteId param from match object
    const {
      match: {
        params: { noteId }
      }
    } = this.props;

    const { notes } = this.state;

    // By default our selectedNote is false
    let selectedNote = false;

    if (noteId > 0) {
      selectedNote = notes.filter(note => note.id === Number(noteId));
    }

    return (
      <div className="Notes">
        <h1>Notes</h1>
        {this.renderNotes(notes || notes)}
      </div>
    );
  }
}

export default Notes;
