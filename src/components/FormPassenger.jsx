import React, {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {
    Button,
    Form,
    Container,
    Grid,
    Divider,
    Loader,
    Dimmer,
    Message
} from 'semantic-ui-react'
import {addPassenger, sendPassenger, setEditMode} from '../redux/passengerReducer'
import {connect} from 'react-redux'
import InputsItem from './InputsItem'
import {updateProp} from '../utils/utils'

const FormPassenger = ({setEditMode, sendPassenger}) => {

    const [persons, setPersons] = useState([])
    const [count, setCount] = useState(1)
    const [fields, setFields] = useState([`pass${count}`])
    const [loading, setLoading] = useState(false)

    const handleChange = (e, {name, value, checked}) => {
        let newPropValue = (checked !== undefined) ? checked : value
        updateProp(persons, name, setPersons, newPropValue)
    }

    const handleSubmit = async () => {
        setLoading(true)
        await sendPassenger({passengers: persons})
        setLoading(false)
        setEditMode(false)
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

            <Dimmer active={loading} page>
                <Loader content='Пожалуйста, подождите'/>
            </Dimmer>

            <Form onSubmit={handleSubmit}>

                {fields.map((name, index) => (
                    <InputsItem fields={fields} handleChange={handleChange} persons={persons}
                                name={name} index={index} removeFields={removeFields}/>

                ))}

                <Button color='red' icon='add' onClick={addFields}/>
                <a style={{color: 'red'}} onClick={addFields} href="#">Добавить пассажира</a>
                <Form.Checkbox required
                               name='rulesAgree'
                               style={{margin: '50px 0'}}
                               label='Настоящим подтверждаю, что в случае оформления мною проездных документов на третьих лиц, предоставляю персональные данные с их согласия.'/>

                <Divider style={{margin: '10px'}}/>

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
        </Container>
    )
}

const MapStateToProps = (state) => {
    return {
        passengers: state.form.passengers
    }
}

export default connect(MapStateToProps, {setEditMode, addPassenger, sendPassenger})(FormPassenger)