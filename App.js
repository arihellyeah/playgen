import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form, {TYPES} from 'react-native-basic-form';


export default function App() {

  const ageOptions = [
  {label:'1', value:1},
  {label:'2', value:2},
  {label:'3', value:3},
  ]

  const inoutOptions = [
  {label:'indoor', value:'in'},
  {label:'outdoor', value:'out'}
  ]

  const costOptions = [
  {label:'$', value:'low'},
  {label:'$$', value:'med'},
  {label:'$$$', value:'high'}
  ]

  const effortOptions = [
  {label:'Low', value:'low'},
  {label:'Medium', value:'med'},
  {label:'High', value:'high'}
  ]

  const weatherOptions = [
  {label:'Fair', value:'fair'},
  {label:'Rain', value:'rain'},
  {label:'Snow', value:'snow'}
  ]

  const initialData = {
    'age': 2
  }

  const fields = [
    {name: 'age', label: 'Age', required: true, type: TYPES.Dropdown, options: ageOptions},
    [
      {name: 'inOut', label: 'Indoor / Outdoor', required: false, type: TYPES.Dropdown, options: inoutOptions},
      {name: 'weather', label: 'Weather', required: false, type: TYPES.Dropdown, options: weatherOptions}

    ],
    [
      {name: 'cost', label: 'Cost', required: false, type: TYPES.Dropdown, options: costOptions},
      {name: 'effort', label: 'Effort', required: false, type: TYPES.Dropdown, options: effortOptions}

    ]

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
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
