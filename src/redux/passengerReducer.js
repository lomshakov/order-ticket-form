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
        mail: ''
    }]
}

const passengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ORDER/ADD_PASSENGER':
            let newPassenger = {
                id: 5,
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
                mail: action.data.mail

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
        default:
            return state
    }
}

export const setUserProfile = (data) => ({type: 'ORDER/ADD_PASSENGER', data})
export const setEditMode = (mode) => ({type: 'ORDER/SET_EDIT_MODE', mode})

export default passengerReducer