import { AppDispatch } from '../store/configureStore';
import { Action, ActionCreator, Dispatch } from 'redux';

// const functionWithDispatch = (url:string) => {
//   return async (dispatch: AppDispatch) => {
//     const {data} = await axios.get(url);
//     dispatch({
//       type: actionTypes.ACTION,
//       data,
//     });
//   };
// };

export const actionTypes = { NEXT_STEP: 'NEXT_STEP' };

export const nextStep: ActionCreator<Action> = () => ({
    type: actionTypes.NEXT_STEP,
});
