import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default class FooterTabsIconExample extends Component {
    render() {
        return (
            <Container style={{

                marginBottom: 3,
                justifyContent: 'flex-end',
                alignItems: 'center',

            }}>

                <Footer tabStyle={{ backgroundColor: "#009387" }}
                >
                    <FooterTab>
                        <Button>
                            <Icon name="apps" />
                        </Button>
                        <Button>
                            <Icon name="camera" />
                        </Button>
                        <Button active>
                            <Icon active name="navigate" />
                        </Button>
                        <Button>
                            <Icon name="person" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container >
        );
    }
}