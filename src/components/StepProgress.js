import React from 'react'
import {Grid, Icon, Step} from 'semantic-ui-react'

const StepExampleStackable = () => (
    <Step.Group stackable='tablet' style={{marginBottom: '50px', width: '100%'}}>
        <Step completed>
            <Icon name='train' />
            <Step.Content>
                <Step.Title>Выбор рейса</Step.Title>
                <Step.Description>Выберите ваш рейс</Step.Description>
            </Step.Content>
        </Step>
        <Step active>
            <Icon name='users' />
            <Step.Content>
                <Step.Title>Пассажиры</Step.Title>
                <Step.Description>Добавьте всех пассажиров</Step.Description>
            </Step.Content>
        </Step>
        <Step>
            <Icon name='cart arrow down' />
            <Step.Content>
                <Step.Title>Подтвердите заказ</Step.Title>
                <Step.Description>Проверьте детали заказа и оплатите</Step.Description>
            </Step.Content>
        </Step>
    </Step.Group>


)




export default StepExampleStackable