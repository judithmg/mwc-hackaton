import { actionTypes } from '../actions/actions';
import { AnyAction } from 'redux';
import initialState from '../store/initialState';

export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case actionTypes.NEXT_STEP:
            return { ...state, step: state.step + 1 };
        default:
            return state;
    }
}
