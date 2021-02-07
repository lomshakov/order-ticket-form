import React, {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Button, Checkbox, Form, Container, Grid, Segment, Divider, Loader, Dimmer, Message} from 'semantic-ui-react'
import './App.css'
import {addPassenger, sendPassenger, setEditMode} from "./redux/passengerReducer"
import {connect} from "react-redux"
import {options} from './components/common/options'

const FormPassenger = ({passengers, setEditMode, addPassenger, sendPassenger}) => {

    const [persons, setPersons] = useState([])
    const [count, setCount] = useState(1)
    const [fields, setFields] = useState([`pass${count}`])
    const [loading, setLoading] = useState(false)

    const handleChange = (e, {name, value, checked}) => {
        let newPropValue = (checked !== undefined) ? checked : value


        let regex = /(?<=pass).*(?=\.)/
        let regexNameProp = /(?<=\.).*/

        let indexPerson = regex.exec(name)[0]
        let nameProp = regexNameProp.exec(name)[0]

        if (indexPerson > persons.length) {
            setPersons([...persons, {[nameProp]: newPropValue}])
        } else {
            //debugger
            setPersons(persons.map((item, index) => {
                //debugger
                if (index === indexPerson - 1) {
                    const newObjProps = {
                        [nameProp]: newPropValue
                    }
                    return {...item, ...newObjProps}
                }
                return item
            }))
        }
    }

    const disableEditMode = () => {
        setEditMode(false)
    }

    const handleSubmit = async () => {
        setLoading(true)
        await setTimeout(() => {
            setLoading(false)
            let obj = {passengers: persons}
            sendPassenger(obj)
            setEditMode(false)
        }, 2000)

    }

    const resetFields = () => {
        setPersons([])
    }

    const addFields = () => {
        let counter = count + 1
        setCount(counter)
        setFields([...fields, `pass${counter}`])
    }

    const removeFields = (e) => {
        if (count > 1) {
            setCount(count - 1)
            setFields([...fields].filter((item, index) => index !== fields.length - 1))
            setPersons([...persons].filter((item, index) => index !== Number(e.currentTarget.id)))
        }
    }

    return (
        <Container>

            <Dimmer active={loading} style={{position: 'absolute', height: '100%'}} page>
                <Loader content='Пожалуйста, подождите' />
            </Dimmer>

            <Form onSubmit={handleSubmit}>
                {fields.map((name, index) => (
                    <div key={name}>

                        <Grid columns={2} style={{marginBottom: '15px'}}>
                            <Grid.Row>
                                <Grid.Column>
                                    <h2 style={{color: 'red'}}>Пассажир №{index+1}</h2>
                                </Grid.Column>

                                <Grid.Column textAlign='right'>
                                    <Button color='red' id={index} icon='remove' onClick={removeFields} disabled={fields.length === 1}/>
                                    <a style={{color: 'red'}} onClick={removeFields} href="#" disabled={fields.length === 1}>Удалить пассажира</a>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>


                        <Form.Group>
                            <Form.Input fluid required name={`${name}.name`}
                                        value={persons[index] ? persons[index].name : ''}
                                        label='Имя' placeholder='Имя' onChange={handleChange}
                                        width={6}/>
                            <Form.Input fluid required name={`${name}.surname`}
                                        value={persons[index] ? persons[index].surname : ''}
                                        label='Фамилия' placeholder='Фамилия'
                                        onChange={handleChange} width={6}/>
                            <Form.Input fluid required name={`${name}.middleName`}
                                        value={persons[index] ? persons[index].middleName : ''}
                                        label='Отчество' placeholder='Отчество'
                                        onChange={handleChange}
                                        width={6}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Select
                                fluid
                                required
                                name={`${name}.gender`}
                                value={persons[index] ? persons[index].gender : ''}
                                label='Пол'
                                options={options.gender}
                                onChange={handleChange}
                                placeholder='Пол'
                                width={6}
                            />
                            <Form.Input required name={`${name}.dateBorn`} type='date' fluid
                                        value={persons[index] ? persons[index].dateBorn : ''}
                                        label='Дата рождения' placeholder='Дата рождения' onChange={handleChange} width={6}/>
                            <Form.Select
                                fluid
                                required
                                name={`${name}.citizenship`}
                                value={persons[index] ? persons[index].citizenship : ''}
                                label='Гражданство'
                                options={options.citizenship}
                                onChange={handleChange}
                                width={6}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Select
                                fluid
                                required
                                name={`${name}.documentType`}
                                value={persons[index] ? persons[index].documentType : ''}
                                label='Тип документа'
                                options={options.documentType}
                                onChange={handleChange}
                                width={6}
                            />
                            <Form.Input fluid required name={`${name}.documentNumber`}
                                        value={persons[index] ? persons[index].documentNumber : ''}
                                        label='Номер документа' placeholder='Номер документа' onChange={handleChange} width={6}/>
                            <Form.Select
                                fluid
                                required
                                name={`${name}.paymentRate`}
                                value={persons[index] ? persons[index].paymentRate : ''}
                                label='Тариф'
                                options={options.paymentRate}
                                onChange={handleChange}
                                width={6}
                            />
                        </Form.Group>

                        <div style={{marginTop: '50px', marginBottom: '20px'}}>
                            В соответствии с п.7 Правил перевозок пассажиров, багажа, грузобагажа железнодорожным транспортом при покупке билета необходимо указать свои контактные данные.
                        </div>

                        <Form.Group>
                            <Form.Input fluid name={`${name}.phone`} label='Телефон пассажира'
                                        value={persons[index] ? persons[index].phone : ''}
                                        placeholder='Телефон пассажира' onChange={handleChange} width={8}/>
                            <Form.Input fluid name={`${name}.mail`} label='E-mail'
                                        value={persons[index] ? persons[index].mail : ''}
                                        placeholder='E-mail' onChange={handleChange} width={8}/>

                        </Form.Group>

                        <Divider style={{marginTop: '50px'}} />
                    </div>

                ))}

                <Button color='red' icon='add' onClick={addFields} />
                <a style={{color: 'red'}} onClick={addFields} href="#">Добавить пассажира</a>
                <Form.Checkbox required name='rulesAgree' style={{margin: '50px 0'}} label='Настоящим подтверждаю, что в случае оформления мною проездных документов на третьих лиц, предоставляю персональные данные с их согласия.'/>

                <Divider style={{margin: '10px'}} />

                <Grid columns={3} style={{marginBottom: '15px'}}>
                    <Grid.Row>
                        <Grid.Column>
                            <Button>Вернуться</Button>
                        </Grid.Column>

                        <Grid.Column>
                            <Button onClick={resetFields}>Очистить данные</Button>
                        </Grid.Column>

                        <Grid.Column textAlign='right'>
                            <Button color='red' type='submit'>Зарезервировать места</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Message negative>
                    <p>После успешного резервирования мест у вас будет 12 минут на оплату заказа.</p>
                </Message>

            </Form>

            <pre>{JSON.stringify(persons, null, 2)}</pre>

        </Container>
    )
}

const MapStateToProps = (state) => {
    return {
        passengers: state.form.passengers
    }
}

export default connect(MapStateToProps, {setEditMode, addPassenger, sendPassenger})(FormPassenger)