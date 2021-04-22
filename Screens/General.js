import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,Alert} from 'react-native'
import {ListItem,Container,Thumbnail,Left,Body,Button, Content,List} from 'native-base'

import {DataItem} from '../Components/DataItem'
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
        <Container>
            <Content>
                <List dataArray={data}
                renderRow={()=>{
                    
                }}/>
                    
                
            </Content>
        </Container>
    )
}

export default General

const styles = StyleSheet.create({})
