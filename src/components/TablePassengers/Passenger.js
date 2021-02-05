import React from 'react'
import {Checkbox, Table} from 'semantic-ui-react'

const Passenger = ({passengers}) => {
    return (
        <>
            { passengers.map(p => p.id && <PassengerItem key={p.id} passenger={p}/>) }
        </>
    )
}

const PassengerItem = ({ passenger }) => {
    return (
        <Table.Row>
            <Table.Cell collapsing>
                <Checkbox slider/>
            </Table.Cell>
            <Table.Cell>{passenger.name}</Table.Cell>
            <Table.Cell>{passenger.paymentRate}</Table.Cell>
            <Table.Cell>{passenger.documentType}</Table.Cell>
            <Table.Cell>{passenger.documentNumber}</Table.Cell>
        </Table.Row>
    )
}

export default Passenger