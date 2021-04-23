import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {List} from 'native-base'
import DataItem from '../Components/DataItem'
import {getArticles} from '../Service/BusinessNews'

const Business = (props) => {
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

export default Business

const styles = StyleSheet.create({})
