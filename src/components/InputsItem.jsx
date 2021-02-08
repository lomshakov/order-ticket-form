import React from 'react'
import {Button, Divider, Form, Grid} from 'semantic-ui-react'
import {options} from './common/options'

const InputsItem = ({ name, index, fields, removeFields, persons, handleChange }) => {
    return (
        <div key={name}>

            <Grid columns={2} style={{marginBottom: '15px'}}>
                <Grid.Row>
                    <Grid.Column>
                        <h2 style={{color: 'red'}}>Пассажир №{index+1}</h2>
                    </Grid.Column>

                    <Grid.Column textAlign='right'>
                        <Button color='red' id={index} icon='remove' onClick={removeFields} disabled={fields.length === 1} />
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
    )
}

export default InputsItem