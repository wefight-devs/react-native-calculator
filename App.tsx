import React, { useState } from 'react';
import {
  StyleSheet, View,
  TextInput,
  Button,
  Text,
} from 'react-native';

const App = () => {
  
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [z, setZ] = useState('');


  return (
    <View style={styles.container}>

      <TextInput 
        style={styles.input}
        onChangeText={text => setX(text)}
        value={x}></TextInput>
    <TextInput 
      style={styles.input}
      onChangeText={text => { setY(text) }}
      value={y}></TextInput>


    <View style={styles.buttonsView}>
      <Button
        onPress={() => {setZ(parseInt(x)+parseInt(y))}}
        title="+"
        />

    <Button
      onPress={() => setZ(parseInt(x)-parseInt(y))}
      title="-"
      />
          <Button
            onPress={() => {setZ(parseInt(x)*parseInt(y))}}
            title="*"
            style={{}}
            />
        </View>
    <Text style={styles.result}>{z}
  </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 12,
    color: 'black',
  },
  buttonsView: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  result: {
    margin: 12,
    alignSelf: 'center',
  }
});

export default App;
