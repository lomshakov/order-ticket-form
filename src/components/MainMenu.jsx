import React, { useState } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

const MainMenu = () => {

    const [activeItem, setActiveItem] = useState('Меню')

    const handleItemClick = (e) => {
        setActiveItem(e.currentTarget.innerText)
    }

    return (
        <Menu size='tiny'>
            <Dropdown onClick={handleItemClick} name='Меню' active={activeItem === 'Меню'} item text='Меню'>
                <Dropdown.Menu>
                    <Dropdown.Item>Мои заказы</Dropdown.Item>
                    <Dropdown.Item>Мои заявки на перевозку ТС</Dropdown.Item>
                    <Dropdown.Item>О сайте</Dropdown.Item>
                    <Dropdown.Item>Правила покупки электронных билетов</Dropdown.Item>
                    <Dropdown.Item>Поезда дальнего следования</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position='right'>
                <Dropdown item text='Язык'>
                    <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        <Dropdown.Item>Russian</Dropdown.Item>
                        <Dropdown.Item>Spanish</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Item>
                    <Button color='red'>Войти</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default MainMenu