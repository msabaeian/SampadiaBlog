//import liraries
import React, { Component } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Container, Content, Text , Spinner , Header } from 'native-base';
// create a component
class Loading extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header androidStatusBarColor="#233241" style={{display:'none'}}/>
                 <View style={styles.logo}>
                <Image
                    style={{width: 150, height: 150}}
                    source={require('./../img/profile.png')}
                />
                <Text style={styles.title}>وبلاگ گروهی دانش آموزان و فارغ التحصیلان استعدادهای درخشان </Text>
                </View>
                
                <View style={styles.loading}>
                <Spinner color='#64ffda' />
                </View>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
  logo:{
    flex:4, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    color:'#FFFFFF',
    fontSize: 12,
    textAlign :'center',
    paddingTop:12
  }
});

//make this component available to the app
export default Loading;
