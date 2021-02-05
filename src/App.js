import React, {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import FormPassenger from "./FormPassenger";
import TablePassengers from "./components/TablePassengers/TablePassengers";
import MainMenu from "./components/MainMenu";
import BreadcrumbExampleDivider from "./components/BreadCrumbs";
import {Container} from "semantic-ui-react";
import {Provider} from "react-redux";
import store from './redux/store'
import {BrowserRouter} from 'react-router-dom'
import MainForm from "./MainForm";
import StepExampleStackable from "./components/StepProgress";


const App = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Container>
                    <MainMenu/>

                    <BreadcrumbExampleDivider/>
                    <StepExampleStackable />

                    <MainForm />

                </Container>
            </BrowserRouter>
        </Provider>
    )
}

export default App
