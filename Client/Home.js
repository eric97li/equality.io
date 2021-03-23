import React, { Component } from 'react';
import { TouchableOpacity, TextInput, View, Text } from 'react-native';
export default class Home extends Component{
  constructor(props) {
    super(props)
    this.state={
    }
  }
  componentDidMount(){
  }
  goToCreateReport =() => {
    console.log("HII")
    this.props.navigation.navigate("RippleTabs");
  }
  goToMap =() => {
    console.log("MAP")
    this.props.navigation.navigate("Incident Map");
  }
  aboutInfo() {
  }
  disclaimerInfo() {
  }
  render() {
      return(
        <View style={{width: "50%", height :"100%", justifyContent: "center"
        , alignSelf: "center", alignContent: "center", alignItems: "center"
        }}>
        <View style={{marginTop: "2.5%", width: "80%"}}>
                <Text style={{color: "black", alignItems: "center", textAlign:"center", marginBottom:"50%", fontSize:50}}> Ripple </Text>
        </View>
        <View style={{marginTop: "2.5%", width: "80%"}}>
                <TouchableOpacity  style={{ borderWidth : 1, height : 42, width: "100%"
              , justifyContent : "center", alignItems: "center", borderRadius: 40 ,
              backgroundColor: "white", alignSelf: "center", textAlign : "center", marginBottom: "10%"
              }}
              onPress={()=>this.goToCreateReport()}
              >
                <Text style={{color: "black", alignItems: "center", textAlign:"center"}}> Report Discrimination </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: "2.5%", width: "80%"}}>
                <TouchableOpacity  style={{ borderWidth : 1, height : 42, width: "100%"
              , justifyContent : "center", alignItems: "center", borderRadius: 40 ,
              backgroundColor: "white", alignSelf: "center", textAlign : "center", marginBottom: "80%"
              }}
              onPress={()=>this.goToMap()}
              >
                <Text style={{color: "black", alignItems: "center", textAlign:"center"}}> View Discrimination Incident Map </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: "2.5%", width: "80%"}}>
                <TouchableOpacity  style={{ borderWidth : 1, height : 42, width: "80%"
              , justifyContent : "center", alignItems: "center", borderRadius: 40 ,
              backgroundColor: "white", alignSelf: "center", textAlign : "center"
              }}
              onPress={()=>this.aboutInfo()}
              >
                <Text style={{color: "black"}}> About Ripple </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: "2.5%", width: "80%"}}>
                <TouchableOpacity  style={{ borderWidth : 1, height : 42, width: "80%"
              , justifyContent : "center", alignItems: "center", borderRadius: 40 ,
              backgroundColor: "white", alignSelf: "center", textAlign : "center"
              }}
              onPress={()=>this.disclaimerInfo()}
              >
                <Text style={{color: "black"}}> Disclaimer </Text>
                </TouchableOpacity>
            </View>
        </View>
      )
  }
}