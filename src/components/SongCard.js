import React from "react";
import {View, Text,Image} from "react-native";
import styles from "./SongCard.styles";

const SongCard = (props)=>{

    return(

        <View style={{flex:1,flexDirection:"row" ,}}>
            <Image style= {styles.image} source = {{uri: props.song.imageUrl}} />
            <View style= {styles.inner_container}>
                <Text style= {styles.title}>{props.song.title}</Text>
                <View style= {styles.info_container}>
                    <View style= {styles.info_container}>
                    <Text style>{props.song.artist}</Text>
                    <Text style= {styles.year}>{props.song.year} </Text>
                </View>
                    
                    {props.song.isSoldOut == true ? 
                    (<View style ={ styles.soldout_container}>
                        <Text style= {styles.soldout_title}>TÜKENDİ</Text>
                    </View>
                    ): null}
                </View>
            </View>
        </View>
    );
};
export default SongCard;