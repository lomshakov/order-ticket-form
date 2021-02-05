import React from 'react'
import {Button, Card, Icon, Image} from 'semantic-ui-react'
import trainIcon from './../assets/images/train_icon.png'

const extra = (
    <a>
        <Icon name='user' />
        16 Friends
    </a>
)

const TrainRouteCard = () => (
    <Card>
        <Card.Content>
            <Image
                floated='right'
                size='mini'
                src={trainIcon}
            />
            <Card.Header>159*A</Card.Header>
            <Card.Meta>Москва - Казань</Card.Meta>
            <Card.Description>
                Скорый, время в пути 12 ч 55 мин<br/><br/>
                <Icon name='wheelchair' />
                <Icon name='briefcase' />
                <Icon name='percent' />
                <Icon name='coffee' />

            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className='ui two buttons'>
                <Button basic color='green'>
                    Approve
                </Button>
                <Button basic color='red'>
                    Decline
                </Button>
            </div>
        </Card.Content>
    </Card>
)

export default TrainRouteCard