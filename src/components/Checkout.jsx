import React from 'react'
import {Button, Dimmer, Divider, Grid, Icon, Loader, Segment} from "semantic-ui-react"
import {connect} from "react-redux"
import {setEditMode} from "../redux/passengerReducer"
import Passenger from "./Passenger"

const Checkout = ({passengers, setEditMode}) => {

    const enableEditMode = () => {
        setEditMode(true)
    }

    const calculateSum = () => {
        let sum = 0
        passengers.map(p => sum += p.ticketCost)
        return sum
    }

    return (
        <div>
            <h2 style={{color: 'red'}}>Ваши места успешно забронированы!</h2>
            <p>Пожалуйста, внимательно проверьте данные вашего заказа перед оплатой</p>
            <a href="#">Правила провоза багажа</a>
            <h2 style={{color: 'red'}}>Пассажиры</h2>


            {passengers.map(p => (
                <Passenger passenger={p} key={p.id}/>
            ))}


            <h1>Сумма заказа: <span style={{color: 'red'}}>{calculateSum()} ₽</span></h1>
            <Divider fitted style={{marginBottom: '20px'}}/>

            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Button onClick={enableEditMode}><Icon name='backward'/>Отменить резерв</Button>
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        <Button color='red'>Перейти к выбору услуг и оплате</Button>
                    </Grid.Column>
                </Grid.Row>


            </Grid>

            <Button primary>Отправленные на сервер данные:</Button>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        passengers: state.form.passengers
    }
}

export default connect(mapStateToProps, {setEditMode})(Checkout)