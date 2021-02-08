import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import MainMenu from './components/MainMenu'
import {Container} from 'semantic-ui-react'
import {Provider} from 'react-redux'
import store from './redux/store'
import {BrowserRouter} from 'react-router-dom'
import MainForm from './components/MainForm'
import StepExampleStackable from './components/StepProgress'

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Container>
                    <MainMenu/>
                    <StepExampleStackable />
                    <MainForm />
                </Container>
            </BrowserRouter>
        </Provider>
    )
}

export default App
