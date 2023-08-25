import { StyleSheet } from "react-native";
export default StyleSheet.create ({
  
container:{
    padding: 10,

},
image : {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10,
},
inner_container: {
    padding: 20,
    flex:1,
    justifyContent: "center",
},
title:{
    fontWeight: "bold",
    fontSize: 27,
    color: "black",
},
info_container: {
flexDirection: "row",
color: "black",
flex: 1,
alignItems: "center",

},
year : {
    fontSize:12,
    paddingLeft: 10,
    color:"gray",
},
seperator:{
    width:"100%",
    borderColor:"#e0e0e0",
    borderWidth:1,
    marginTop: 2,
},
soldout_container: {
    borderWidth:1,
    borderColor: "red",
    padding: 5,
    borderRadius: 5,
      
},
soldout_title:{
    color: "red",
    fontSize : 12,
},
content_container: {
    flexDirection: "row",
},
});
