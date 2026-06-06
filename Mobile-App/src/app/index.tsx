import { Text, View, StyleSheet,Button, Alert,ScrollView,Image } from "react-native";


export default function Index() {
  return (

  
  

    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.title}>FireManga🔥</Text>
    <Text>🔍</Text>
    
   
  </View>

   <View style={styles.fillerbar}>
 
<Button title="Anime" color="#5e449a" onPress={() => {}} />
<Button title="Manga" color="#5e449a" onPress={() => {}} />

  </View>
  
    <ScrollView showsVerticalScrollIndicator showsHorizontalScrollIndicator={true}
>

   <View style={styles.cardgrid}>
<View style={styles.overlaytext}>
  <View style={styles.card}><Text style={{marginRight:12,}}></Text><Image source={{uri:  "https://m.media-amazon.com/images/I/81L94vkJmXL._RI_.jpg"}} style={styles.cardImage}/></View>
</View>
<View style={styles.card}><Text style={{marginRight:12,color:"#ffffff",fontWeight:"bold"}}>Naruto</Text><Image source={{uri: "https://m.media-amazon.com/images/I/81L94vkJmXL._RI_.jpg"}} style={styles.cardImage}/><View style={styles.overlaytext}></View></View>
<View style={styles.card}><Text style={{marginRight:12,color:"#ffffff",fontWeight:"bold"}}>manga page</Text><Image source={{uri:"https://i.pinimg.com/originals/62/b9/5d/62b95d328e63f50825ff5eba267cacda.jpg"}} style={styles.cardImage}/><View style={styles.overlaytext}></View></View>
<View style={styles.card}><Text style={{marginRight:12,color:"#ffffff",fontWeight:"bold"}}>manga page</Text><Image source={{uri: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/02/mha-class-1-a-costumes.png"}} style={styles.cardImage}/><View style={styles.overlaytext}></View></View>
<View style={styles.card}><Text style={{marginRight:12,color:"#ffffff",fontWeight:"bold"}}>manga page</Text><Image source={{uri: "https://m.media-amazon.com/images/I/81L94vkJmXL._RI_.jpg"}} style={styles.cardImage}/><View style={styles.overlaytext}></View></View>
<View style={styles.card}><Text style={{marginRight:12,color:"#ffffff",fontWeight:"bold"}}>manga page</Text><Image source={{uri: "https://m.media-amazon.com/images/I/81L94vkJmXL._RI_.jpg"}} style={styles.cardImage}/><View style={styles.overlaytext}></View></View></View>
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
        flexDirection:"row",
        alignItems:"flex-start",
        paddingHorizontal:16,
        paddingVertical:4,
        marginBottom:12


     
      },
      cardgrid:{
        flexDirection:"row",
        flexWrap:"wrap",
        gap:10,
        padding:10,
        alignSelf:"stretch"

      },
      
      card:{
        borderWidth:1,
        borderColor:"#ffffff",
        height:220,
        width:"47%",
        borderRadius:10,


      },
overlaytext:{
position:"absolute",
bottom:0,
left:0,
right:0,
backgroundColor:"rgba(0,0,0,0.5)",
padding:6
},

      cardImage:{
  overflow:"hidden",
  width: "100%",
  height: 160,
  borderRadius: 10,
  resizeMode: "cover",
  

      },
     
      
      footer:{
        alignItems:"baseline",
        borderBottomWidth:1,
        borderColor: "rgba(255,255,255,0.3)",
         alignSelf:"stretch",
  padding:16,
  borderTopWidth:1,
o      },

  
});