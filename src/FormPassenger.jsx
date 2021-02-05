import React, {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Button, Checkbox, Form, Container, Grid, Segment, Divider} from 'semantic-ui-react'
import './App.css'
import MainMenu from "./components/MainMenu";
import BreadcrumbExampleDivider from "./components/BreadCrumbs";

import FormExampleCaptureValues from "./components/Examples";
import {passengerAPI} from "./api/api";
import {setUserProfile, setEditMode} from "./redux/passengerReducer";
import {connect} from "react-redux";

const optionsGender = [
    {key: 'm', text: 'Мужской', value: 'male'},
    {key: 'f', text: 'Женский', value: 'female'}
]

const optionsCitizenship = [
    {key: 'ru', text: 'Россия', value: 'russia'},
    {key: 'ua', text: 'Украина', value: 'ukraine'},
    {key: 'by', text: 'Беларусь', value: 'belarus'},
    {key: 'kz', text: 'Казахстан', value: 'kazakhstan'},
    {key: 'ar', text: 'Армения', value: 'armenia'}
]

const documentType = [
    {key: 'p', text: 'Паспорт', value: 'pass'},
    {key: 'm', text: 'Военный билет', value: 'militaryId'}
]

const paymentRate = [
    {key: 'f', text: 'Полный', value: 'full'},
    {key: 's', text: 'Льготный', value: 'sale'}
]


const FormPassenger = ({ setEditMode, setUserProfile }) => {


    let initialState = {

/*        id: null,
        name: '',
        surname: '',
        middleName: '',
        gender: '',
        dateBorn: '',
        citizenship: '',
        documentType: '',
        documentNumber: '',
        paymentRate: '',
        agreement: false,
        phone: '',
        mail: ''*/

    }


    const [person, setPerson] = useState({})
    const [loading, setLoading] = useState(false)

    /*const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [middleName, setMiddleName] = useState('')*/

    /*const onValueChange = (setFunction) => (e) => {
        setFunction(e.currentTarget.value)
    }*/

    const handleChange = (e, {name, value}) => {
        //debugger
        setPerson({...person, [name]: value})
    }

    const onClickCheckbox = (e, {name, checked}) => {
        //debugger
        setPerson({...person, [name]: checked})
    }

    const disableEditMode = () => {
        setEditMode(false)
    }

    const handleSubmit = async () => {
        // let data = await passengerAPI.setPassengerData(person)
        // console.log(data)
        setUserProfile(person)
        disableEditMode()
        alert(JSON.stringify(person, null, 2))
    }

    const resetFields = () => {
        setPerson(null)
        //debugger
    }

    return (
        <Container>



            <h1>Данные пассажира</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Input fluid required name='name' label='Имя' placeholder='Имя' onChange={handleChange} width={6}/>
                    <Form.Input fluid required name='surname' label='Фамилия' placeholder='Фамилия' onChange={handleChange} width={6}/>
                    <Form.Input fluid required name='middleName' label='Отчество' placeholder='Отчество' onChange={handleChange}
                                width={6} />
                </Form.Group>

                <Form.Group>
                    <Form.Select
                        fluid
                        required
                        name='gender'
                        label='Пол'
                        options={optionsGender}
                        onChange={handleChange}
                        placeholder='Пол'
                        width={6}
                    />
                    <Form.Input required name='dateBorn' type='date' fluid label='Дата рождения' placeholder='Дата рождения' onChange={handleChange} width={6}/>
                    <Form.Select
                        fluid
                        required
                        name='citizenship'
                        label='Гражданство'
                        options={optionsCitizenship}
                        onChange={handleChange}
                        width={6}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Select
                        fluid
                        required
                        name='documentType'
                        label='Тип документа'
                        options={documentType}
                        onChange={handleChange}
                        width={6}
                    />
                    <Form.Input fluid required name='documentNumber' label='Номер документа' placeholder='Номер документа' onChange={handleChange} width={6}/>
                    <Form.Select
                        fluid
                        required
                        name='paymentRate'
                        label='Тариф'
                        options={paymentRate}
                        onChange={handleChange}
                        width={6}
                    />
                </Form.Group>

                <Form.Checkbox name='agreement' label='Согласен на получение оповещений' onChange={onClickCheckbox}/>

                <Divider horizontal style={{marginTop: '50px'}}>Не забудьте</Divider>

                <Form.Group>
                    <Form.Input fluid name='phone' label='Телефон пассажира' placeholder='Телефон пассажира' onChange={handleChange} width={8}/>
                    <Form.Input fluid name='mail' label='E-mail' placeholder='E-mail' onChange={handleChange} width={8}/>

                </Form.Group>

                <Button size='big' onClick={disableEditMode}>Назад</Button>
                <Button size='big' primary type='submit'>Отправить</Button>
                {/*<Button onClick={resetFields}>Очистить</Button>*/}



            </Form>


            {/*<pre>{JSON.stringify(person, null, 2)}</pre>*/}

        </Container>
    )
}

export default connect(null, {setEditMode, setUserProfile})(FormPassenger)
