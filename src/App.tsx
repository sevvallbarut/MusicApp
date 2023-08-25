import React from "react";
import { SafeAreaView, Text, View,StyleSheet , FlatList,} from "react-native";
import music_data from "./music-data.json";
import SongCard from "./components/SongCard";
import styles from  "./components/SongCard.styles";
function App (){
    const renderSong = ({item}:{item:any}) => <SongCard song = {item}/>;
    const renderSeperator = () => <View style= {styles.seperator}/>;
     
    return(
        <SafeAreaView>

            <View style={styles.container}>

            <View>
                <FlatList 
                
                    data = {music_data}
                    keyExtractor={item => item.id}
                    renderItem= {renderSong}
                    ItemSeparatorComponent={renderSeperator}
         
                  />
            </View>
            </View>

        </SafeAreaView>
    );

};
export default App;