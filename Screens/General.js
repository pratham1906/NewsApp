import React,{useState,useEffect} from 'react'
import {ActivityIndicator, StyleSheet, Text, View ,Alert,SafeAreaView,FlatList} from 'react-native'
import {ListItem,Container,Thumbnail,Left,Body,Button, Content,List} from 'native-base'

import DataItem from '../Components/DataItem'
import {getArticles} from '../Service/news'

const General = () => {
    const [isLoading,setIsLoading]=useState(true);
    const [datas,setData]=useState(null)
    useEffect(() => {
      getArticles().then(datas=>{
          setIsLoading(false);
          setData(datas);
      }),error=>{
Alert.alert('ERROR','Something Went wrong')
      }
    },[])

//     let view=isLoading?(<View>
// <ActivityIndicator animating={isLoading}/>
// <Text style={{marginTop:10}}>Please Wait.</Text>
//     </View>):(
        
        
//     )
   console.log(datas)
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <FlatList data={datas}
       renderItem={({item})=><DataItem data={item}/>}
       />
       
     </View>   
    )
}

export default General

const styles = StyleSheet.create({})
