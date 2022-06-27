import {BehaviorSubject} from "rxjs";

export interface IStoreState {
  darkMode: boolean
}

const initialStoreState: IStoreState = {
  darkMode: true
}

let state = initialStoreState;

const store$ = new BehaviorSubject<IStoreState> (initialStoreState);

const storeService = {
  modeChanger: (mode: boolean):void => {
    state = {...state, darkMode: mode}
    store$.next(state)
  },

  subscribe: (setAppBarState: (value: (((prevState: IStoreState) => IStoreState) | IStoreState)) => void) => store$.subscribe(setAppBarState),
  initialStoreState
}

export default storeService