import React, {useState} from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import Passenger from "./Passenger";
import {connect} from "react-redux";
import {setEditMode} from "../../redux/passengerReducer";

const TablePassengers = ({ editMode, setEditMode, passengers }) => {
    // const []

    const onClickAdd = () => {
        setEditMode(true)
    }

    const onClickDelete = () => {

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
                <Passenger passengers={passengers} />
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
                        <Button size='small'>Удалить</Button>

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

export default connect(MapStateToProps, {setEditMode})(TablePassengers)