import React, {useState} from 'react'
import TablePassengers from "./components/TablePassengers/TablePassengers";
import FormPassenger from "./FormPassenger";
import {Container} from "semantic-ui-react";
import {connect} from "react-redux";
import TrainRouteCard from "./components/TrainRouteCard";

const MainForm = ({ editMode }) => {


    return (
        <div>
            { editMode ? <FormPassenger/> : <>
                <TrainRouteCard/>
                <h2>Список пассажиров</h2>
                <TablePassengers/>
                </>  }


        </div>
    )
}

const MapStateToProps = (state) => {
    return {
        editMode: state.form.editMode
    }
}

export default connect(MapStateToProps, null)(MainForm)