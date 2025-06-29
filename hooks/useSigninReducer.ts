import { useReducer } from "react";
import { EnumLoginReducer as ITEM_TYPE } from '@/types/constants'

export interface SigninData {
    username: string;
    password: string;
    check_textInputchage: boolean;
    secureTextEntry: boolean;
    isValidUser: boolean;
    isValidPassword: boolean;
    showErrorMessage: boolean;
    disableSignInButton: boolean
}

export type SigninAction =
| { type: ITEM_TYPE.SET_USERNAME; payload: string }
| { type: ITEM_TYPE.SET_PASSWORD; payload: string }
| { type: ITEM_TYPE.TOGGLE_SECURE_TEXT_ENTRY }
| { type: ITEM_TYPE.VALIDATE_USERNAME; payload: boolean }
| { type: ITEM_TYPE.VALIDATE_PASSWORD;  payload: boolean }
| { type: ITEM_TYPE.SHOW_ERROR; payload: boolean}
| { type: ITEM_TYPE.RESET }


const initialState: SigninData = {
    username: '',
    password: '',
    check_textInputchage: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    showErrorMessage: false,
    disableSignInButton: true,
}

const signinReducer = (state: SigninData, action: SigninAction): SigninData => {
    switch (action.type) {
        case ITEM_TYPE.SET_USERNAME:
            return {
                ...state,
                username: action.payload,
                check_textInputchage: action.payload.trim().length > 0
            };
        
        case ITEM_TYPE.SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            }

        case ITEM_TYPE.TOGGLE_SECURE_TEXT_ENTRY:
            
            return {
                ...state,
                secureTextEntry: !state.secureTextEntry
            }
        
        case ITEM_TYPE.VALIDATE_USERNAME:
            return {
                ...state,
                isValidUser: action.payload
            }

        case ITEM_TYPE.VALIDATE_PASSWORD:
            return {
                ...state,
                isValidPassword: action.payload
            }

        case ITEM_TYPE.SHOW_ERROR: {
            return {
                ...state,
                showErrorMessage: action.payload
            }
        }
        case ITEM_TYPE.RESET: 
            return initialState;
        default:
            return state;
    }
}


export function useSigninReducer() {
    const [state, dispatch] = useReducer(signinReducer, initialState);

    const setUserName = (username: string) => {
        dispatch({ type: ITEM_TYPE.SET_USERNAME, payload: username});
        dispatch({ type: ITEM_TYPE.VALIDATE_USERNAME, payload: username.length > 4})
    }

    const setPassword = (password: string) => {
        dispatch({ type: ITEM_TYPE.SET_PASSWORD, payload: password});
        dispatch({ type: ITEM_TYPE.VALIDATE_PASSWORD, payload: password.length >= 6});
    }

    const toggleSecurityTextEntry = () => {
        dispatch({ type: ITEM_TYPE.TOGGLE_SECURE_TEXT_ENTRY });
    }

    const validate = () => {
        const isValidUser = state.username.length >= 4;
        const isValidPassword = state.password.length >= 6;

        dispatch({ type: ITEM_TYPE.VALIDATE_USERNAME, payload: isValidUser });
        dispatch({ type: ITEM_TYPE.VALIDATE_PASSWORD, payload: isValidPassword });

        const isValid = isValidUser && isValidPassword;
        dispatch({ type: ITEM_TYPE.SHOW_ERROR, payload: !isValid})

        return isValid;
    }

    const reset = () => {
        dispatch({ type: ITEM_TYPE.RESET })
    }

    return {
        state,
        setUserName,
        setPassword,
        toggleSecurityTextEntry,
        validate,
        reset
    }

    
}