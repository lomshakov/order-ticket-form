import {randomInteger, updateObjectInArray} from "../utils/utils";
import { v4 as idGenerate } from 'uuid';

let initialState = {
    editMode: false,
    passengers: [{
        id: null,
        name: '',
        surname: '',
        middleName: '',
        gender: '',
        dateBorn: '',
        citizenship: '',
        documentType: '',
        documentNumber: '',
        paymentRate: '',
        agreement: false,
        phone: '',
        mail: '',
        deleteMarked: false
    }]
}

const passengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ORDER/ADD_PASSENGER':
            let newPassenger = {
                id: idGenerate(),
                name: action.data.name,
                surname: action.data.surname,
                middleName: action.data.middleName,
                gender: action.data.gender,
                dateBorn: action.data.dateBorn,
                citizenship: action.data.citizenship,
                documentType: action.data.documentType,
                documentNumber: action.data.documentNumber,
                paymentRate: action.data.paymentRate,
                agreement: action.data.agreement,
                phone: action.data.phone,
                mail: action.data.mail,
                deleteMarked: false
            }
            return {
                ...state,
                passengers: [...state.passengers, newPassenger]
            }
        case 'ORDER/SET_EDIT_MODE':
            return {
                ...state,
                editMode: action.mode
            }
        case 'ORDER/CHANGE_DELETE_MARKED':
            return {
                ...state,
                passengers: updateObjectInArray(state.passengers, action.id, "id", 'deleteMarked')
            }
        case 'ORDER/DELETE_PASSENGERS':
            //debugger
            return {
                ...state,
                passengers: state.passengers.filter(item => item.deleteMarked === false)
            }

        default:
            return state
    }
}

export const setUserProfile = (data) => ({type: 'ORDER/ADD_PASSENGER', data})
export const setEditMode = (mode) => ({type: 'ORDER/SET_EDIT_MODE', mode})
export const changeDeleteMarked = (id) => ({type: 'ORDER/CHANGE_DELETE_MARKED', id})
export const deletePassengers = () => ({type: 'ORDER/DELETE_PASSENGERS'})

export default passengerReducer