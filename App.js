import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form, {TYPES} from 'react-native-basic-form';


export default function App() {

  const options = [
  {label:'1', value:1},
  {label:'2', value:2},
  {label:'3', value:3},
  ]
  const initialData = {
    'age': 2
  }

  const fields = [
    {name: 'age', label: 'Age', required: true, type: TYPES.Dropdown, options: options}
  ]

  return (
    <View style={styles.container}>
      <Form
        title={"Generate"}
        fields={fields}
        initialData={initialData}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
