import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import { getInitialData } from './utils';

const noteTitleCharLimit = 50;

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [filter, setFilter] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const [remainingCharacters, setRemainingCharacters] = useState(noteTitleCharLimit);

  const handleSearchChange = (event) => {
    setFilter(event.target.value);
    setFilteredNotes(notes.filter((note) => note.title.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: +new Date(),
      title: noteTitle.trim(),
      body: noteBody.trim(),
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes([...notes, newNote]);
    setFilteredNotes(notes.filter((note) => note.title.toLowerCase().includes(filter.toLowerCase())));
  };

  const handleNoteTitleChange = (event) => {
    if (event.target.value.length <= noteTitleCharLimit) {
      setNoteTitle(event.target.value);
      setRemainingCharacters(noteTitleCharLimit - event.target.value.length);
    }
  };

  const handleNoteBodyChange = (event) => {
    setNoteBody(event.target.value);
  };

  const handleDeleteButtonOnClick = (targetId) => {
    setNotes(notes.filter(({ id }) => id !== targetId));
    setFilteredNotes(filteredNotes.filter(({ id }) => id !== targetId));
  };

  const handleArchiveButtonOnClick = (targetId) => {
    const newNotes = [...notes];
    const note = newNotes.find(({ id }) => id === targetId);
    note.archived = !note.archived;
    setNotes(newNotes);
  };

  const headerProps = {
    filter,
    handleSearchChange,
  };

  const formProps = {
    handleOnSubmit,
    handleNoteTitleChange,
    handleNoteBodyChange,
    remainingCharacters,
    noteTitle,
    noteBody,
  };

  const cardActions = {
    handleDeleteButtonOnClick,
    handleArchiveButtonOnClick,
  };

  return (
    <>
      <Header {...headerProps} />
      <div className='note-app__body'>
        <Form {...formProps} />
        <h2>Catatan Aktif</h2>
        <List notes={filteredNotes.filter(({ archived }) => !archived)} actions={cardActions} />
        <h2>Arsip</h2>
        <List notes={filteredNotes.filter(({ archived }) => archived)} actions={cardActions} />
      </div>
    </>
  );
};

export default App;
