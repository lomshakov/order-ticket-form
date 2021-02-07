import React from 'react'
import {Grid, Icon, Step} from 'semantic-ui-react'

const StepExampleStackable = () => (
    <Step.Group stackable='tablet' size='mini' style={{marginBottom: '50px', width: '100%'}}>
        <Step completed>
            <Icon name='train' />
            <Step.Content>
                <Step.Title>Поиск билета</Step.Title>
            </Step.Content>
        </Step>
        <Step completed>
            <Icon name='users' />
            <Step.Content>
                <Step.Title>Выбор поезда и места</Step.Title>
            </Step.Content>
        </Step>
        <Step active>
            <Icon name='cart arrow down' />
            <Step.Content>
                <Step.Title style={{color: 'black'}}>Данные пассажиров и оплата</Step.Title>
            </Step.Content>
        </Step>
    </Step.Group>


)




export default StepExampleStackable