import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";

export function SettingsScreen({ route, navigation }) {
  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.screen}>


<View style={styles.naslov}>
<Text style={styles.naslovText}>Prva postava</Text>
</View>

<View style={styles.jumbotron}>
        <View style={styles.leftContainer}>
        <Text style={styles.Text}>11</Text>
              <Text style={styles.leftText}>12</Text>
              <Text style={styles.leftText}>20</Text>
              <Text style={styles.leftText}>22</Text>
              <Text style={styles.leftText}>9</Text>
              <Text style={styles.leftText}>6</Text>
              <Text style={styles.leftText}>10</Text>
              <Text style={styles.leftText}>15</Text>
              <Text style={styles.leftText}>4</Text>
              <Text style={styles.leftText}>19</Text>
              <Text style={styles.leftText}>13</Text>
        
        </View>

        <View style={styles.leftContainer}>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        
        </View>

        <View style={styles.leftContainer}>
        <Text style={styles.leftTextb}>Brozović</Text>
              <Text style={styles.leftTextb}>Grbić</Text>
              <Text style={styles.leftTextb}>Gvardiol</Text>
              <Text style={styles.leftTextb}>Juranović</Text>
              <Text style={styles.leftTextb}>Kramarić</Text>
              <Text style={styles.leftTextb}>Lovren</Text>
              <Text style={styles.leftTextb}>Modrić</Text>
              <Text style={styles.leftTextb}>Pasalić</Text>
              <Text style={styles.leftTextb}>Perišić</Text>
              <Text style={styles.leftTextb}>Sosa</Text>
              <Text style={styles.leftTextb}>Vlasic</Text>
        
        </View>

      

        <View style={styles.rightContainer}>
        <Text style={styles.rightTexta}>Bakaev</Text>
              <Text style={styles.rightTexta}>Barinov</Text>
              <Text style={styles.rightTexta}>Dlveyev</Text>
              <Text style={styles.rightTexta}>Dzhiklya</Text>
              <Text style={styles.rightTexta}>Fomin</Text>
              <Text style={styles.rightTexta}>Golovin</Text>
              <Text style={styles.rightTexta}>Ionov</Text>
              <Text style={styles.rightTexta}>Karavaev</Text>
              <Text style={styles.rightTexta}>Kudryashov</Text>
              <Text style={styles.rightTexta}>Safonov</Text>
              <Text style={styles.rightTexta}>Smolov</Text>
        </View>

        <View style={styles.leftContainer}>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        
        </View>

        <View style={styles.rightContainer}>
        <Text style={styles.rightText}>10</Text>
              <Text style={styles.rightText}>6</Text>
              <Text style={styles.rightText}>3</Text>
              <Text style={styles.rightText}>14</Text>
              <Text style={styles.rightText}>8</Text>
              <Text style={styles.rightText}>17</Text>
              <Text style={styles.rightText}>20</Text>
              <Text style={styles.rightText}>4</Text>
              <Text style={styles.rightText}>13</Text>
              <Text style={styles.rightText}>12</Text>
              <Text style={styles.rightText}>9</Text>
        </View>



      </View>

      <View style={styles.naslov}>
<Text style={styles.naslovText}>Zamjene</Text>
</View>


<View style={styles.jumbotron}>
        <View style={styles.leftContainer}>
       
              <Text style={styles.leftText}>3</Text>
              <Text style={styles.leftText}>7</Text>
              <Text style={styles.leftText}>5</Text>
              <Text style={styles.leftText}>16</Text>
              <Text style={styles.leftText}>14</Text>
              <Text style={styles.leftText}>1</Text>
              <Text style={styles.leftText}>8</Text>
              <Text style={styles.leftText}>18</Text>
              <Text style={styles.leftText}>17</Text>
              <Text style={styles.leftText}>2</Text>
              <Text style={styles.leftText}>22</Text>
        
        </View>

        <View style={styles.leftContainer}>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        
        </View>

        <View style={styles.leftContainer}>
        <Text style={styles.leftTextb}>Barišić</Text>
              <Text style={styles.leftTextb}>Brekalo</Text>
              <Text style={styles.leftTextb}>Caleta-Car</Text>
              <Text style={styles.leftTextb}>Jakić</Text>
              <Text style={styles.leftTextb}>Livaja</Text>
              <Text style={styles.leftTextb}>Livaković</Text>
              <Text style={styles.leftTextb}>Majer</Text>
              <Text style={styles.leftTextb}>Orsic</Text>
              <Text style={styles.leftTextb}>Petković</Text>
              <Text style={styles.leftTextb}>Stanisic</Text>
              <Text style={styles.leftTextb}>Vida</Text>
        
        </View>

      

        <View style={styles.rightContainer}>
        <Text style={styles.rightTexta}>Chistayakov</Text>
              <Text style={styles.rightTexta}>Erokhin</Text>
              <Text style={styles.rightTexta}>Glebov</Text>
              <Text style={styles.rightTexta}>Guliherme</Text>
              <Text style={styles.rightTexta}>Halkin</Text>
              <Text style={styles.rightTexta}>Krugovoy</Text>
              <Text style={styles.rightTexta}>Miranchuk</Text>
              <Text style={styles.rightTexta}>Mostovoy</Text>
              <Text style={styles.rightTexta}>Sergeev</Text>
              <Text style={styles.rightTexta}>Sutormin</Text>
              <Text style={styles.rightTexta}>Zobnin</Text>
        </View>

        <View style={styles.leftContainer}>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
        
        </View>

        <View style={styles.rightContainer}>
        <Text style={styles.rightText}>2</Text>
              <Text style={styles.rightText}>21</Text>
              <Text style={styles.rightText}>19</Text>
              <Text style={styles.rightText}>1</Text>
              <Text style={styles.rightText}>16</Text>
              <Text style={styles.rightText}>5</Text>
              <Text style={styles.rightText}>15</Text>
              <Text style={styles.rightText}>22</Text>
              <Text style={styles.rightText}>23</Text>
              <Text style={styles.rightText}>18</Text>
              <Text style={styles.rightText}>11</Text>
        </View>

        </View>

        <View style={styles.naslov}>
<Text style={styles.naslovText}>Treneri</Text>
</View>

<View style={styles.jumbotron}>
<View style={styles.leftContainer}>
       
              <Text style={styles.leftText}>0</Text>

              </View>
              <View style={styles.leftContainer}>
        <Image style={styles.image} source={require("../assets/zastava1.png")}/>
        </View>
        <View style={styles.leftContainer}>
        <Text style={styles.leftTextb}>Dalić</Text>
              </View>
              <View style={styles.rightContainer}>
        <Text style={styles.rightTexta}>Karpin</Text>
              </View>
              <View style={styles.leftContainer}>
        <Image style={styles.image} source={require("../assets/zastava2.png")}/>
              </View>
              <View style={styles.rightContainer}>
        <Text style={styles.rightText}>0</Text>
              </View>
              </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    
  },
  naslov:{
   padding: 5,
    alignItems: "center",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    backgroundColor: "grey"
   
  
  },
  naslovText:{
    fontSize: 15,
    color: "white"
   },

   rightTexta:{
     textAlign: "right",
     paddingLeft: 50
   },

   rightText:{
    textAlign: "right",
    
  },

   leftText:{
    textAlign: "left"
  },

  leftTextb:{
    textAlign: "left",
    paddingRight: 50
  },

  image:{
    height: 20,
    width: 25,
    paddingBottom: 21.5
     
  },


   jumbotron: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 5,
    

  },

});
