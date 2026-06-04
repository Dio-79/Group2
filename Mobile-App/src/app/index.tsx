import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
  
  

    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.title}>FireManga🔥🔥</Text>
    
    <View style={styles.fillerbar}>
  <Text style={{marginRight:12,color:"#ffffff"}}>type</Text>
  <Text style={{marginRight:12,color:"#ffffff"}}>Genre</Text>
  <Text style={{marginRight:12,color:"#ffffff"}}>Newest</Text>
  <Text style={{marginRight:12,color:"#ffffff"}}>Added</Text>
  <Text style={{marginRight:12,color:"#ffffff"}}>Random</Text>
  <Text style={{marginRight:12,color:"#ffffff"}}>search</Text>
  <Text style={{marginRight:12,color:"#ffffff"}}>filter</Text>
  <Text style={{marginRight:12,color:"#ffffff"}}>login</Text>
  </View>
  </View>

   <View style={styles.container}></View>
   <View style={styles.card}><Text>manga page</Text></View>
   <View style={styles.card}><Text>manga page</Text></View>
   <View style={styles.card}><Text>manga page</Text></View>

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
        borderColor: "rgba(255,255,255,0.3)"

        
      },
       fillerbar:{
        
        flexDirection:"row",
        alignItems:"flex-start",
        paddingHorizontal:16,
        paddingVertical:4,

     
      },
      
      card:{
        borderRadius:40




      },
     
      
      footer:{
        alignItems:"baseline",
        borderBottomWidth:1,
        borderColor: "rgba(255,255,255,0.3)"
      },

  
});