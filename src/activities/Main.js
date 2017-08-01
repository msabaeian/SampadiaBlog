//import liraries
import React, { Component } from 'react';
import { Alert, Linking, Image } from 'react-native'
import { Container, Content, Text, StyleProvider, Header, Left, Right, Icon, Button, Body, Title, CardItem, Card, Thumbnail } from 'native-base';
import getTheme from './../theme/components';
import material from './../theme/variables/material';
import renderIf from './../components/renderif'
import Loading from './../components/Loading';
import { Actions } from 'react-native-router-flux'
import HTMLView from 'react-native-htmlview';
import TimeAgo from 'react-native-timeago'
import moment from 'moment'

require('moment/locale/fa')
moment.locale('fa')


// create a component
class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isUnderLoading: true,
            posts: []
        }
    }

    componentDidMount() {
        this.FetchData()
    }

    async FetchData() {
        const response = await fetch("http://www.sampadia.com/blog/wp-json/wp/v2/posts")
        const jsonResponse = await response.json()
        jsonResponse.forEach((d) => {
            this.setState({
                posts: this.state.posts.concat([d])
            })
        })

        this.setState({
            isUnderLoading: false
        })
    }

    render() {
        if (this.state.isUnderLoading) {
            return (
                <Loading />
            )
        } else {
            return (
                this.MainAct()
            )
        }
    }

    MainAct() {
        return <StyleProvider style={getTheme(material)}>
            <Container>
                <Header androidStatusBarColor="#30419E">
                    <Left>
                        <Button bordered light small onPress={this._githubClick}>
                            <Text>گیت‌هاب</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Title>سمپادیا</Title>
                    </Right>
                </Header>
                <Content removeClippedSubviews={true}>
                    {this.posts()}
                </Content>
            </Container>
        </StyleProvider>
    }

    posts = () => {
        return this.state.posts.map((data, index) => {

            return <Card style={{ flex: 0 }} key={index}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri:"http://www.sampadia.com/images/sampad.png" }} />
                        <Body>
                            <Text>{data.title.rendered}</Text>
                            <Text note><TimeAgo time={data.date} /></Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <HTMLView
                            value={data.excerpt.rendered}
                        />
                    </Body>
                </CardItem>
                <CardItem>
                    <Right>
                        <Button transparent textStyle={{ color: '#87838B' }}>
                            <Text onPress={() => Actions.showPost({title:data.title.rendered, text: data.content.rendered, date: data.date, link: data.link })}>مشاهده</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        })
    }

    _githubClick = () => {
        let message = "این اپلیکیشن یک پروژه اوپن‌سورس/متن‌باز بر روی گیت‌هاب است که بر پایه React Native نوشته شده است. \n در صورت تمایل برای توسعه و یا مشاهده سورس کد و توسعه دهندگان بر روی گیت هاب کلیک نمایید"
        Alert.alert('گیت‌هاب', message,
            [{ text: 'گیت‌هاب', onPress: () => this._OpenGithub() },
            { text: 'تایید', onPress: () => console.log("") }], { cancelable: true }
        )
    }

    _OpenGithub() {
        Linking.openURL("github.com").catch(err => console.error('مشکل در باز کردن', err));
    }
}

//make this component available to the app
export default Main;
