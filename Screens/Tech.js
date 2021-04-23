import React,{useState,useEffect} from 'react'
import {ActivityIndicator, StyleSheet, Text, View ,Alert,SafeAreaView,FlatList} from 'react-native'
import {ListItem,Container,Thumbnail,Left,Body,Button, Content,List} from 'native-base'
import {getArticles} from '../Service/TechCrunch'
import DataItem from '../Components/DataItem'
const Tech = () => {
    const [isLoading,setIsLoading]=useState(true);
    const [data,setData]=useState(null)
    useEffect(() => {
      getArticles().then(datas=>{
          setIsLoading(false);
          setData(datas);
      }),error=>{
Alert.alert('ERROR','Something Went wrong')
      }
    },[])

      
        return (
            <View>
          <List dataArray={data}
          renderRow={(item)=>{return(<DataItem data={item}/>)}}
          />
          
        </View>   
        
    )
}

export default Tech

const styles = StyleSheet.create({})
