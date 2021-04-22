import React from 'react'

import {ListItem,Left,Thumbnail,Body,Text,Button} from 'react-native'



const DataItem = (props) => {
    const data=props.data;
    return (
        <ListItem thumbnail>
        <Left>
            <Thumbnail square source={{}}/>
        </Left>
<Body>
    <Text></Text>
    <Text></Text>
</Body>
<Right>
    <Button transparent>
        <Text></Text>
    </Button>
</Right>


        </ListItem>
    )
}

export default DataItem

const styles = StyleSheet.create({})
