import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  Card,
  Searchbar,
  Title,
  Paragraph,
  Avatar,
  Button,
  Divider,
} from "react-native-paper";
import { Api } from "../Api";

const Rendering = (props) => {
  return (
    <View style={styles.card}>
      <View>
        <Avatar.Image source={props.image} style={{ margin: 1 }} />
      </View>
      <View>
        <Title style={{}}> Hello</Title>
        <Paragraph style={{ padding: 5 }}>
          fnfvbhibfibrifbhibfrbfhiqbribfqiebfiqerbibghirbh iberibqeii
          briqibgibiqeirbqiberibgqerihbgihetrbgihbeigbqeibg
        </Paragraph>
        <Divider />
      </View>
    </View>
  );
};
const HomeScreen = () => {
  const renderItem = ({ item }) => {
    return <Rendering title={item.title} image={item.image} />;
  };

  return (
    <View>
      <Searchbar placeholder="Search" />
      <FlatList data={Api} renderItem={renderItem} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    color: "#fff",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  card: {
    flexDirection: "row",
    marginVertical: "5%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContent: {
    flexDirection: "column",
  },
});
