import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'
import {Left,Thumbnail,Body,Button,Right} from 'native-base'
import { ListItem, Avatar} from 'react-native-elements'



const DataItem = (props) => {
const {title,description,urlToImage}=props.data;
    return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%'}}>
        
        <View style={{width:'100%',flexWrap:'wrap',borderWidth:2,borderRadius:12}}>
            <View style={{flexDirection:'row',padding:12}}>
            <Image source={{uri:urlToImage}} style={{width:40,height:40}}/>
            <Text numberOfLines={3} style={{fontSize:12}}>{title}</Text>
            </View>
            <View>
            <Text>{description}</Text>
        </View>
        </View>
            
          
    </View>

    )
}



export default DataItem

const styles = StyleSheet.create({})
