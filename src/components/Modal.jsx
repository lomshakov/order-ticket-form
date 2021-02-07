import React from 'react'
import {Button, Header, Icon, Modal} from 'semantic-ui-react'

function ModalWindow({ setShowModal, showModal, enableEditMode }) {
    return (
        <Modal
            trigger={<Button><Icon name='backward'/>Отменить резерв</Button>}
            header='Подтвердите действие'
            content='Вы уверены, что хотите удалить пассажира?'
            onClose={() => setShowModal(false)}
            onOpen={() => setShowModal(true)}
            open={showModal}>
            <Header icon>
                <Icon name='archive' />
                Подтвердите действие
            </Header>
            <Modal.Content>
                <p>
                    Вы уверены, что хотите отменить резерв и вернуться к добавлению пассажиров?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button  color='red' onClick={() => setShowModal(false)}>
                    <Icon name='remove' /> Нет
                </Button>
                <Button color='green' onClick={() => {
                    setShowModal(false)
                    enableEditMode()
                }}>
                    <Icon name='checkmark' /> Да
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalWindow