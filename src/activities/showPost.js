//import liraries
import React, { Component } from 'react';
import ReactNative , { Alert, Linking, Image } from 'react-native'
import { Container, Content, Text, StyleProvider, Header,  Button, Title , Left , Right } from 'native-base';
import getTheme from './../theme/components';
import material from './../theme/variables/material2';
import renderIf from './../components/renderif'
import Loading from './../components/Loading';
import { Actions } from 'react-native-router-flux'
import HTMLView from 'react-native-htmlview';
// create a component
class showPost extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
            <Container>
                <Header androidStatusBarColor="#d52c1b" style={{backgroundColor: '#e62a17'}}>
                    <Left>
                        <Button bordered light small onPress={() => Actions.pop()}>
                            <Text>بازگشت</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Title>
                        {this.props.title}
                        </Title>
                    </Right>
                </Header>
                <Content style={{padding:10}}>
                    <HTMLView
                        value={this.props.text}
                    />
                </Content>
            </Container>
        </StyleProvider>
        );
    }
}


//make this component available to the app
export default showPost;
