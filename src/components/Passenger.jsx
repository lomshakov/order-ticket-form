import React from "react"
import {Divider, Grid, Segment} from "semantic-ui-react"
import {randomInteger} from "../utils/utils"

const Passenger = ({ passenger }) => {
    return (
        <Segment key={passenger.id}>
            <Grid columns={4}>
                <Grid.Row>
                    <Grid.Column>
                        ФИО
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        Пол
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        Дата рождения
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        Паспорт РФ
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <strong>{passenger.surname} {passenger.name} {passenger.middleName}</strong>
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        <strong>{(passenger.gender === 'male') ? 'Мужской' : 'Женский'}</strong>
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        <strong>{passenger.dateBorn}</strong>
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        <strong>{passenger.documentNumber}</strong>
                    </Grid.Column>
                </Grid.Row>
                <Divider fitted/>

                <Grid.Row>
                    <Grid.Column>
                        ВАГОН<strong> {randomInteger(1, 30)}</strong>
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        МЕСТО<strong> {randomInteger(1, 45)} Верхнее</strong>
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        Тариф<strong> {(passenger.paymentRate === 'full') ? 'Полный' : 'Льготный'}</strong>
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        <strong>{passenger.ticketCost} ₽</strong>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Passenger