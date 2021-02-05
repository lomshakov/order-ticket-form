import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

const FormExampleCaptureValues = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const onNameChange = (e) => {
        setName(e.currentTarget.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.currentTarget.value)
    }

    const handleSubmit = () => {
        //this.setState({ submittedName: name, submittedEmail: email })
    }




        return (
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={onNameChange}
                        />
                        <Form.Input
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={onEmailChange}
                        />
                        <Form.Button content='Submit' />
                    </Form.Group>
                </Form>
                <strong>onChange:</strong>
                <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
                {/*<strong>onSubmit:</strong>
                <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>*/}
            </div>
        )

}

export default FormExampleCaptureValues
