import React from 'react'
import {Checkbox, Table} from 'semantic-ui-react'

const Passenger = ({passengers, changeDeleteMarked}) => {
    return (
        <>
            { passengers.map(p => p.id && <PassengerItem key={p.id} passenger={p} id={p.id} changeDeleteMarked={changeDeleteMarked}/>) }
        </>
    )
}

const PassengerItem = ({ passenger, changeDeleteMarked, id }) => {

    const changeMarked = () => {
        // debugger
        changeDeleteMarked(id)
    }

    console.log('PassengerItem render')

    return (
        <Table.Row>
            <Table.Cell collapsing>
                <Checkbox slider onChange={changeMarked}/>
            </Table.Cell>
            <Table.Cell>{passenger.name}</Table.Cell>
            <Table.Cell>{passenger.paymentRate}</Table.Cell>
            <Table.Cell>{passenger.documentType}</Table.Cell>
            <Table.Cell>{passenger.documentNumber}</Table.Cell>
        </Table.Row>
    )
}

export default Passenger