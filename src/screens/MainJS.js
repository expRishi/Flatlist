import React from 'react';
import {  StyleSheet, Text, FlatList, View, Image} from 'react-native';

const componentName = () => {

    const names = [
        {
            no : "1",
            name : "Kota Factory",
            creator : "tvF",
            Season : "S1",
        },
        {
            no : "2",
            name : "Gullak",
            creator : "tvF",
            Season : "S1",
        },
        {
            no : "3",
            name : "Panchayat",
            creator : "tvF",
            Season : "S1",
        },
        {
            no : "4",
            name : "Pithchers",
            creator : "tvF",
            Season : "S1",
        },
        {
            no : "5",
            name : "Farzi",
            creator : "Raj & DK",
            Season : "S1",
        },
        {
            no : "6",
            name : "96",
            creator : "Vijay Sethu",
            Season : "Movie",
        },
        {
            no : "7",
            name : "Interstellar",
            creator : "Christopher",
            Season : "Movie",
        },
        {
            no : "8",
            name : "Kota Factory",
            creator : "tvF",
            Season : "S2",
        },
        {
            no : "9",
            name : "Gullak",
            creator : "tvF",
            Season : "S2",
        },
        {
            no : "10",
            name : "Panchayat",
            creator : "tvF",
            Season : "S2",
        },
        {
            no : "11",
            name : "Pithchers",
            creator : "tvF",
            Season : "S2",
        },
        {
            no : "12",
            name : "Farzi",
            creator : "Raj & DK",
            Season : "S2",
        },
        {
            no : "13",
            name : "96",
            creator : "tvF",
            Season : "S1",
        },
        {
            no : "14",
            name : "Interstellar",
            creator : "tvF",
            Season : "S1",
        },
    ]
    return (
        <View>  
            <Image style={styles.imageStyle} source={require("../../assets/pexels-mikhail-nilov-7671957.jpg")}/>
            <Text style={styles.textStylee}>Top 14 WebSeries & Movies</Text>
            <FlatList 
                    style={styles.listStyle}
                    keyExtractor={(index) => {
                        return index.no;
                    }}
                    horizontal
                    data={names} renderItem= {( {item} ) => {
                        console.log(item.name);
                        return (
                        <View style={styles.viewStyle}> 
                            <Text style={styles.textStyle}>{item.name}</Text>
                            <Text style={styles.textStyle2}>{item.creator}</Text>
                            <Text style={styles.textStyle3}>{item.Season}</Text>
                        </View>
                        );
                    }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle : {
        textAlign: "center",
        fontSize: 50,
        color: "red",
        padding: 10,
        backgroundColor: "black",  
    },
    textStyle2 : {
        textAlign: "center",
        fontSize: 50,
        color: "white",
        padding: 11,
        backgroundColor: "black",
    },
    textStyle3 : {
        textAlign: "center",
        fontSize: 50,
        color: "white",
        padding: 11,
        backgroundColor: "black",
    },
    listStyle : {
        padding: 5,
        margin: 20,
    },
    viewStyle : {
        padding: 5,
        margin: 20,
        marginTop: 5,
    },
    textStylee : {
        fontSize: 70,
        textAlign: "center",
        fontWeight: "900",
        color: "black",
        backgroundColor: "yellow",
        marginTop: 10,
    },
    imageStyle : {
        marginTop: 30,
        alignSelf: "center",
        width: 200,
        height: 200,
    },
});

export default componentName;
