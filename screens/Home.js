import React, {Component} from "react";
import { Text, View, SafeAreaView, Platform, StyleSheet, ImageBackground, Image, TouchableOpacity, StatusBar} from 'react-native';

export default class DailyPicScreen extends Component{
    render(){
        return(
            <View style = {{
                flex:1,
                alignItems:"center",
                justifyContent:"center",
            }}>  
                <SafeAreaView style = {styles.androidSafeArea}/>
                <ImageBackground  source = {require("../assets/space.gif")} style = {styles.image}>
                    <View style={styles.text}>
                        <Text style = {styles.title}>Stellar App</Text> 
                    </View>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate("SpaceCrafts")}>
                        <Text style = {styles.heading}> Space Crafts </Text>
                        <Image source = {require("../assets/space_crafts.png")} style = {styles.imageIcon}/>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate("DailyPic")}>
                        <Text style = {styles.heading}> Daily Pictures </Text>
                        <Image source = {require("../assets/daily_pictures.png")} style = {styles.imageIcon}/>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate("StarMap")}>
                        <Text style = {styles.heading}> Star Map </Text>
                        <Image source = {require("../assets/star_map.png")} style = {styles.imageIcon}/>
                    </TouchableOpacity>

                </ImageBackground>
                <Text>Home Screen!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    androidSafeArea:{
        marginTop:Platform.OS === "android"? StatusBar.currentHeight:0,
    },
    image:{
        flex:1,
        resizeMode:"cover",
    },
    title:{
        fontSize:40,
        fontWeight:"bold",
        color:"white",
    },
    text:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center",
    },
    button:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        color:"#FFFFFF"
    },
    heading:{
        fontSize:35,
        fontWeight:"bold",
        color:"D5316F",
        marginTop:75,
        paddingLeft:30,
    },
    imageIcon:{
        position:"absolute",
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80,
    },
})