import { SET_DATA, SET_BANNER, SET_REF } from '../actions/types';

const initialState = {
	data: '',
	bannerData: '',
	ref: null,
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
		case SET_BANNER:
			return {
				...state,
				bannerData: payload,
				loading: false,
			};
		case SET_REF:
			return {
				...state,
				ref: payload,
				loading: false,
			};
		default:
			return state;
	}
};
