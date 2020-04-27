import { SET_DATA, SET_BANNER, SET_REF } from './types';

export const setHeaderData = (data: string) => async (dispatch: Function) => {
	dispatch({
		type: SET_DATA,
		payload: data,
	});
};

export const setBanner = (data: string) => async (dispatch: Function) => {
	dispatch({
		type: SET_BANNER,
		payload: data,
	});
};

export const setRef = (ref: any) => async (dispatch: Function) => {
	dispatch({
		type: SET_REF,
		payload: ref,
	});
};
