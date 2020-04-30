import React, { Component } from 'react';
import { ListItem, Left, Thumbnail, Body, Right, Text, Button } from 'native-base';
import { View, Alert } from 'react-native'
import Timeat from './time'

class DataItem extends Component {

    constructor(props) {
        super(props)
        this.data = props.data
    }
    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail circular source={{
                        uri: this.data.urlToImage != null ?
                            this.data.urlToImage : "https://static.coindesk.com/wp-content/uploads/2018/08/BTC-and-USD.jpg"
                    }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={2}>{this.data.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text>{this.data.source.name}</Text>
                        <Timeat time={this.data.publishedAt} />
                    </View>
                </Body>
                <Right>
                    <Button transparent onPress={() => { Alert.alert("Success", "You have suceeded") }}>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        );
    }
}

export default DataItem;