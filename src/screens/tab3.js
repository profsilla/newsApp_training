import React, { Component } from 'react';
import { Container, Content, List } from 'native-base';
import DataItem from '../footers/config/dataItem'

export default class Tab1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.tech
        }
    }

    render() {

        let view = (
            <List
                dataArray={this.state.data}
                renderRow={(item) => {
                    return <DataItem data={item} />
                }}
            />
        )
        return (
            <Container>
                <Content>
                    {view}
                </Content>
            </Container>
        );
    }
}