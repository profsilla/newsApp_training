import React, { Component } from 'react'
import moment from 'moment'
import { Text } from 'native-base'

class Timeat extends Component {
    constructor(props) {
        super(props)
        this.date = this.props.time
    }
    render() {
        return (
            <Text note style={{ marginHorizontal: 10 }}>
                {moment(this.date || moment.now()).fromNow()}
            </Text>
        )
    }
}

export default Timeat;
