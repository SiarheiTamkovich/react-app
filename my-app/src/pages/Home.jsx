import "./Home.scss";
import { useDispatch, useSelector } from 'react-redux';
import { increaseAction,  decreaseAction} from '../store/actions/actions';
//import { store } from "../store/store";
import { AddNotes } from "../components/AddNotes/AddNotes";

//store.subscribe(() => console.log(store.getState()));

export const Home = () => {
  const dispatch = useDispatch();
  const counterSelector = useSelector(state => state.count.value); 

  const increase = () => {
    dispatch(increaseAction(5));
  }

  const decrease = () => {
    dispatch(decreaseAction());
  }

  return (
    <div className="home-container">
      <div className="home-background hide">
        <div>{counterSelector}</div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
        <AddNotes />
    </div>
  )
}
