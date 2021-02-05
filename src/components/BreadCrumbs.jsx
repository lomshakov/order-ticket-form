import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const BreadcrumbExampleDivider = () => (
    <Breadcrumb style={{margin: '20px 0'}}>
        <Breadcrumb.Section link>Поиск билета</Breadcrumb.Section>
        <Breadcrumb.Divider>/</Breadcrumb.Divider>
        <Breadcrumb.Section active>Сделать заказ</Breadcrumb.Section>
    </Breadcrumb>
)

export default BreadcrumbExampleDivider