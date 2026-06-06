import { Text, View, StyleSheet,Button, Alert,ScrollView } from "react-native";


export default function Index() {
  return (
  
  

    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.title}>FireManga🔥</Text>
        <text></text>

    <text>🔍</text>
    
   
  </View>
<view>
   <View style={styles.fillerbar}>
  <Text style={{marginRight:12,color:"#5e449a"}}>Anime</Text>
  <Text style={{marginRight:12,color:"#5e449a"}}>Manga</Text>

  </View>
  </view>
    <ScrollView horizontal showsHorizontalScrollIndicator={true}
>

   <View style={styles.container}></View>
   <View style={styles.card}><Text style={{marginRight:12,}}>manga page</Text></View>
   <View style={styles.card}><Text style={{marginRight:12,}}>manga page</Text></View>
   <View style={styles.card}><Text style={{marginRight:12,}}>manga page</Text></View>
  <View style={styles.card}><Text style={{marginRight:12,}}>manga page</Text></View>
   <View style={styles.card}><Text style={{marginRight:12,}}>manga page</Text></View>

      </ScrollView>
   <View style={styles.footer}> 
      
   </View>



    </View>
  


    

  );

  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",         
    backgroundColor: "#030449",
    flexDirection:"column" 
    

  
  },
  
    title:{
      fontSize:25,
      fontWeight:"600",
      color:"#ffffff",
     textAlign:"left",

      
    },
   
      header:{
        flexDirection:"row",
        backgroundColor:"#030449",
        alignSelf:"stretch",
        paddingVertical:9,
        paddingHorizontal:23,
        borderBottomWidth:1,
        borderColor: "rgba(255,255,255,0.3)",
        marginBottom:4

        
      },
       fillerbar:{
        backgroundColor:"#051638d3",
        flexDirection:"row",
        alignItems:"flex-start",
        paddingHorizontal:16,
        paddingVertical:4,
        marginBottom:12


     
      },
      
      card:{
        borderWidth:1,
        borderColor:"#ffffff",
        height:150,
        width:250,
        borderRadius:10,


      },
     
      
      footer:{
        alignItems:"baseline",
        borderBottomWidth:1,
        borderColor: "rgba(255,255,255,0.3)"
      },

  
});