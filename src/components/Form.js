const Form = ({
  handleOnSubmit,
  handleNoteTitleChange,
  handleNoteBodyChange,
  remainingCharacters,
  noteTitle,
  noteBody,
}) => {
  return (
    <form className='note-input' onSubmit={handleOnSubmit}>
      <h2 className='note-input__title'>Buat catatan</h2>
      <p className='note-input__title__char-limit'>Sisa karakter: {remainingCharacters}</p>
      <input
        type='text'
        placeholder='Ini adalah judul ...'
        value={noteTitle}
        onChange={handleNoteTitleChange}
        required
      />
      <textarea
        className='note-input__body'
        placeholder='Tuliskan catatanmu di sini ...'
        value={noteBody}
        onChange={handleNoteBodyChange}
        required
      />
      <button type='submit' className='note-input__submit'>
        Buat
      </button>
    </form>
  );
};

export default Form;
