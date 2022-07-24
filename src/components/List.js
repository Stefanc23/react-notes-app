import Card from './Card';

const List = ({ notes, actions }) => {
  return (
    <>
      {notes.length === 0 ? (
        <p className='notes-list__empty-message'>Tidak ada catatan</p>
      ) : (
        <div className='notes-list'>
          {notes.map((notes) => (
            <Card key={notes.id} {...notes} {...actions} />
          ))}
        </div>
      )}
    </>
  );
};

export default List;
