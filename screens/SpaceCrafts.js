import React, {Component} from "react";
import {View, Text} from "react-native"

export default class SpaceCraftsScreen extends Component{
    render(){
        return(
            <View style = {{
                flex:1,
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Text> Space Crafts Screen</Text>
            </View>
        )
    }
}