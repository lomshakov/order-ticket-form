import React from 'react'
import {connect} from 'react-redux'
import FormPassenger from './FormPassenger'
import Checkout from './Checkout'

const MainForm = ({ editMode }) => {
    return (
        <div>
            { editMode ? <FormPassenger/> : <Checkout />}
        </div>
    )
}

const MapStateToProps = (state) => {
    return {
        editMode: state.form.editMode,
        currentStep: state.form.currentStep
    }
}

export default connect(MapStateToProps, null)(MainForm)