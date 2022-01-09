import { useDispatch, useSelector } from 'react-redux';
import { addNotesAction } from '../../store/actions/actions';

export const AddNotes = () => {
  const dispatch = useDispatch();
  const notesSelector = useSelector(state => state.notes)

  let input;
  const addItem = (event) => {
    event.preventDefault();
    if(input.value) dispatch(addNotesAction(input.value));
    input.value = '';
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <input ref={node => input = node}/>
        <button type="submit" >Add Note</button>
      </form>
      <ul>
        {notesSelector.map(item => {
          return (
            <li key={item.id}>
              {item.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
