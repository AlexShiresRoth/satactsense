import { SET_DATA } from './types';

export const setHeaderData = (data: string) => async (dispatch: Function) => {
	dispatch({
		type: SET_DATA,
		payload: data,
	});
};
