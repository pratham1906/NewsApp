import React,{useEffect} from 'react'
import {View} from 'react-native'
import { Text,Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base'



import * as Font from 'expo-font';





const DataItem = (props) => {
    
    useEffect(() => {
        (async () => await Font.loadAsync({
          Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
        }))})
    

const {title,description,urlToImage}=props.data
console.log(title)
console.log(description)
    return (
        
    // <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%'}}>
        
    //     <View style={{width:'100%',flexWrap:'wrap',borderWidth:2,borderRadius:12}}>
    //         <View style={{flexDirection:'row',padding:12}}>
    //         <Image source={{uri:urlToImage}} style={{width:40,height:40}}/>
    //         <Text numberOfLines={3} style={{fontSize:12}}>{title}</Text>
    //         </View>
    //         <View>
    //         <Text>{description}</Text>
    //     </View>
    //     </View>
            
          
    // </View>
//     <ListItem thumbnail>
// <Left>
//     <Thumbnail square source={{uri:urlToImage}}/>
// </Left>
// <Body>
//     <Text>{title}</Text>
//     <Text>{description}</Text>

// </Body>
// <Right>
//     <Button transparent>
//         <Text>View</Text>
//     </Button>
// </Right>
//     </ListItem>

// <ListItem style={{flexDirection:'column'}} thumbnail>
//     <View>
//     <Thumbnail  square source={{uri:urlToImage}}/>
//     </View>
//     <Text>{title}</Text>
//     <Text>{description}</Text>
// </ListItem>

<ListItem thumbnail style={{borderBottomWidth:2,paddingTop:12}}>
<Left style={{padding:4}}>
  <Thumbnail square source={{ uri: urlToImage}} />
</Left>

<View style={{flexDirection:'row', flex: 1, flexWrap: 'wrap',flexShrink: 1}}>
  <Text numberOfLines={2} style={{fontSize:13}}>{title}</Text>

  </View>


</ListItem>
  

    )
}



export default DataItem


