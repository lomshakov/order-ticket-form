import React, { useState } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

const MainMenu = () => {

    const [activeItem, setActiveItem] = useState('Главная')

    const handleItemClick = (e) => {
        // debugger
        setActiveItem(e.currentTarget.innerText)
        // setActiveItem('home')
    }

    return (
        <Menu size='medium'>
            <Menu.Item
                name='Главная'
                active={activeItem === 'Главная'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='Правила'
                active={activeItem === 'Правила'}
                onClick={handleItemClick}
            />

            <Menu.Menu position='right'>
                <Dropdown item text='Язык'>
                    <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        <Dropdown.Item>Russian</Dropdown.Item>
                        <Dropdown.Item>Spanish</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Item>
                    <Button primary>Войти</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default MainMenu