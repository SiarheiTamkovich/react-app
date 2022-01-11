import { useDispatch, useSelector } from 'react-redux';
import { addNotesAction } from '../../store/actions/actions';
import { toggleAction } from '../../store/actions/actions';
import './AddNotes.scss';

export const AddNotes = () => {
  const dispatch = useDispatch();
  const notesSelector = useSelector(state => state.notes)

  let input;
  const addItem = (event) => {
    event.preventDefault();
    if(input.value) dispatch(addNotesAction(input.value));
    input.value = '';
  }

  const toggleItem = (event) => {
//    console.log(event)
    dispatch(toggleAction(event.target.parentNode.id))
  }

  return (
    <div className='notes-container'>
      <form className='notes-form' onSubmit={addItem}>
        <input ref={node => input = node}/>
        <button className='btn btn-outline-light' type="submit" >Add Note</button>
        <button  className='btn btn-outline-light'>Load Nots</button>
      </form>
      <ul>
        {notesSelector.map(item => {
          return (
            <li key={item.id} id={item.id} className='notes-items'>
              <input className="form-check-input" type="checkbox" onChange={toggleItem} defaultChecked={item.isCompleted}></input>
              <span className='notes-text'>{item.title}</span>
              <button className="btn btn-outline-light">
                <i class="bi bi-pencil-square"></i>
              </button>
              <button className="btn btn-outline-light">
                <i class="bi bi-trash-fill"></i>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
