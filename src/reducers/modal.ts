import { SET_MODAL, SET_MODAL_CATEGORY } from '../actions/types';

const initialState = {
	modalState: false,
	category: '',
	loading: true,
};

export default (state = initialState, action: any) => {
	const { type, payload } = action;
	switch (type) {
		case SET_MODAL:
			return {
				...state,
				modalState: payload,
				loading: false,
			};
		case SET_MODAL_CATEGORY:
			return {
				...state,
				category: payload,
				loading: false,
			};
		default:
			return state;
	}
};
