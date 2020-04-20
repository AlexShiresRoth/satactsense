import { SET_MODAL, SET_MODAL_CATEGORY } from './types';

export const setModalState = (status: boolean) => async (dispatch: any) => {
	dispatch({
		type: SET_MODAL,
		payload: status,
	});
};

export const setCategory = (category: string) => async (dispatch: any) => {
	dispatch({
		type: SET_MODAL_CATEGORY,
		payload: category,
	});
};
