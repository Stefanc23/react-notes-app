import { showFormattedDate } from '../utils';

const Card = ({ id, title, createdAt, archived, body, handleDeleteButtonOnClick, handleArchiveButtonOnClick }) => {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
        <p className='note-item__body'>{body}</p>
      </div>
      <div className='note-item__action'>
        <button type='button' className='note-item__delete-button' onClick={() => handleDeleteButtonOnClick(id)}>
          Delete
        </button>
        <button type='button' className='note-item__archive-button' onClick={() => handleArchiveButtonOnClick(id)}>
          {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
      </div>
    </div>
  );
};

export default Card;
