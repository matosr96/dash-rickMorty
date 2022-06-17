import characterReducer from "@/reducers/characterReducer";
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Dispatch,
} from "redux";
import thunk from "redux-thunk";

const initialState = {};

const reducer = combineReducers({
  characterList: characterReducer.listReducer,
});

const composeEnhancer = compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

type StoreEvent = any;
interface Store {
  reviews: string;
}

export default store;
