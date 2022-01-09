import { combineReducers } from "redux";
import { moviesReducer} from "./movieReducer";
const reducers = combineReducers({
  allMovies: moviesReducer,
});
export default reducers;
