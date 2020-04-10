import { SET_DATA } from '../actions/types';

const initialState = {
	data: '',
	loading: true,
};

export default (state = initialState, action: any) => {
	const { type, payload } = action;
	switch (type) {
		case SET_DATA:
			return {
				...state,
				data: payload,
				loading: false,
			};
		default:
			return state;
	}
};
