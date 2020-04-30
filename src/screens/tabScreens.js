import React, { Component } from 'react';
import { Container, Header, Text, Title, Tab, Tabs, Left, Body, Right } from 'native-base';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import { getArticles } from '../footers/config/news'
import { getBusinessArticles } from '../footers/config/news'
import { getTechArticles } from '../footers/config/news'
import { Alert, ActivityIndicator, View } from 'react-native'

export default class TabsExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            general: {},
            business: {},
            tech: {},
            isLoading: true
        }
    }

    componentDidMount() {
        getArticles().then(data => {
            this.setState({

                general: data
            })
        }, error => {
            Alert.alert("Error", "Could not fetch data")
        })

        getBusinessArticles().then(data => {
            this.setState({

                business: data
            })
        }, error => {
            Alert.alert("Error", "Could not fetch data")
        })

        getTechArticles().then(data => {
            this.setState({
                isLoading: false,
                tech: data
            })
        }, error => {
            Alert.alert("Error", "Could not fetch data")
        })
    }
    render() {

        let view = this.state.isLoading ? (
            <View>
                <ActivityIndicator animating={this.state.isLoading} />
                <Text>Loading...</Text>
            </View>
        ) : (
                <Container>
                    <Header style={{ backgroundColor: "#009387" }} hasTabs>
                        <Left />
                        <Body>
                            <Title style={{ color: "white" }}>Silla News</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Tabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
                        <Tab tabStyle={{ backgroundColor: "#009387" }}
                            activeTabStyle={{ backgroundColor: '#009387' }}
                            textStyle={{ color: 'white' }}
                            activeTextStyle={{ color: "white" }} heading="General">
                            <Tab1 general={this.state.general} />
                        </Tab>
                        <Tab tabStyle={{ backgroundColor: "#009387" }}
                            activeTabStyle={{ backgroundColor: '#009387' }}
                            textStyle={{ color: 'white' }}
                            activeTextStyle={{ color: "white" }} heading="Business">
                            <Tab2 business={this.state.business} />
                        </Tab>
                        <Tab tabStyle={{ backgroundColor: "#009387" }}
                            activeTabStyle={{ backgroundColor: '#009387' }}
                            textStyle={{ color: 'white' }}
                            activeTextStyle={{ color: "white" }} heading="Tech">
                            <Tab3 tech={this.state.tech} />
                        </Tab>
                    </Tabs>
                </Container>
            )
        return (
            <View>
                {view}
            </View>

        );
    }
}