import {randomInteger, updateObjectInArray} from "../utils/utils";
import { v4 as idGenerate } from 'uuid';
import {passengerAPI} from "../api/api";

let initialState = {
    editMode: true,
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
        ticketCost: 0
    }]
}

const passengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ORDER/ADD_PASSENGER':
            action.data.passengers.map(p => p.ticketCost = randomInteger(1500, 5000))
            action.data.passengers.map(p => p.id = idGenerate())
            return {
                ...state,
                passengers: action.data.passengers
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

        case 'ORDER/SET_CURRENT_STEP':
            return {
                ...state,
                currentStep: action.step
            }
        default:
            return state
    }
}

export const addPassenger = (data) => ({type: 'ORDER/ADD_PASSENGER', data})
export const setEditMode = (mode) => ({type: 'ORDER/SET_EDIT_MODE', mode})
export const changeDeleteMarked = (id) => ({type: 'ORDER/CHANGE_DELETE_MARKED', id})
export const setCurrentStep = (step) => ({type: 'ORDER/SET_CURRENT_STEP', step})

export const sendPassenger = (data) => async (dispatch) => {
    dispatch(addPassenger(data))
    let dataResponse = await passengerAPI.setPassengerData(data)
    alert('This object sending to server:' + JSON.stringify(dataResponse, null, 2))
}

export default passengerReducer