import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,Alert} from 'react-native'

import {getArticles} from '../Service/news'
const General = () => {
    const [isLoading,setIsLoading]=useState(true);
    const [data,setData]=useState(null)
    useEffect(() => {
      getArticles().then(data=>{
          setIsLoading(false);
          setData(data);
      }),error=>{
Alert.alert('ERROR','Something Went wrong')
      }
    },[])
    
   console.log(data)
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default General

const styles = StyleSheet.create({})
