import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal
} from "react-native";


const HomeScreen = () => {
  const [passwords, setpassword] = useState("");
  const [name, setname] = useState("");
  const [contacts, setcontacts] = useState([]);
  const [validate, setvalidate] = useState(true);
  const [Modals, setModal] = useState(true)
  const texthandler = (names) => {
    Validator();
    setname(names);
  };
  const passwordhandler = (password) => {
    if (+password >= 0 && password.length <= 11) {
      Validator();
      setpassword(password);
    }
  };
  const Validator = () => {
    if (name.length >= 3 && passwords.length === 11) {
      setvalidate(!validate);
    }
  };

  const onsubmitHandler = () => {
    setcontacts((contact) => [...contact, { passwords, name }]);

    setname("");
    setpassword("");
    setvalidate(!validate);
  };
  const modalHandler = () => {
       setModal(false)  
     }

  useEffect(() => {
    Validator();
  }, []);
  return (
    
    <View style={styles.homeContainer}>
      
      <View style={styles.container}>
        <Text style={styles.MyText}> Name</Text>
        <TextInput
          style={styles.Input}
          value={name}
          onChangeText={texthandler}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.MyText}> Password </Text>
        <TextInput
          style={styles.Input}
          value={passwords}
          onChangeText={passwordhandler}
          keyboardType="numeric"
        />
      </View>
      <Button title="ENTER" onPress={onsubmitHandler} disabled={validate} />
      <ScrollView>
        {contacts.map((conts) => (
          <Text>{conts}</Text>
        ))}
      </ScrollView>
    </View>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  Input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 7,
  },
  MyText: {
    color: "#211AAD",
    padding: 40,
  },
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    margin: 4,
  },
});
