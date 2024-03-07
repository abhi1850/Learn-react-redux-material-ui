import {
    FETCH_CRICKETERS_SUCCESS,
    ADD_CRICKETER_SUCCESS,
    DELETE_CRICKETER_SUCCESS,
    EDIT_CRICKETER_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
    cricketers: [],
    error: null,
};

const cricketerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CRICKETERS_SUCCESS:
            return {
                ...state,
                cricketers: action.payload,
                error: null,
            };
        case ADD_CRICKETER_SUCCESS:
            return {
                ...state,
                cricketers: [...state.cricketers, action.payload],
                error: null,
            };
        case DELETE_CRICKETER_SUCCESS:
            return {
                ...state,
                cricketers: state.cricketers.filter((cricketer) => cricketer.id !== action.payload),
                error: null,
            };
        case EDIT_CRICKETER_SUCCESS:
            return {
                ...state,
                cricketers: state.cricketers.map((cricketer) =>
                    cricketer.id === action.payload.id ? { ...cricketer, ...action.payload.newData } : cricketer
                ),
                error: null,
            };
        case API_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default cricketerReducer;
