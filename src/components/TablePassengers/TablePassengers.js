import React, {useState} from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import Passenger from "./Passenger";
import {connect} from "react-redux";
import {changeDeleteMarked, customADDPASSENGER, deletePassengers, setEditMode} from "../../redux/passengerReducer";

const TablePassengers = ({ editMode, setEditMode, passengers, changeDeleteMarked, deletePassengers }) => {
    // const []

    const onClickAdd = () => {
        setEditMode(true)
    }

    const onClickDelete = () => {
        deletePassengers()
    }

    return (
        <Table celled compact definition selectable>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell/>
                    <Table.HeaderCell>Имя</Table.HeaderCell>
                    <Table.HeaderCell>Тариф</Table.HeaderCell>
                    <Table.HeaderCell>Документ</Table.HeaderCell>
                    <Table.HeaderCell>Номер документа</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Passenger passengers={passengers} changeDeleteMarked={changeDeleteMarked} />
            </Table.Body>

            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell/>
                    <Table.HeaderCell colSpan='4'>
                        <Button
                            floated='right'
                            icon
                            labelPosition='left'
                            primary
                            onClick={onClickAdd}
                            size='small'
                        >
                            <Icon name='user'/>Добавить
                        </Button>
                        <Button size='small' onClick={onClickDelete}>Удалить</Button>

                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

const MapStateToProps = (state) => {
    return {
        editMode: state.form.editMode,
        passengers: state.form.passengers
    }

}

export default connect(MapStateToProps, {setEditMode, changeDeleteMarked, deletePassengers})(TablePassengers)
