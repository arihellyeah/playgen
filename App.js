import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form, {TYPES} from 'react-native-basic-form';


export default function App() {

  const ageOptions = [
  {label:'Infants (0-1 year)', value:1},
  {label:'Toddlers (1-2 years)', value:2},
  {label:'Toddlers (2-3 years)', value:3},
  {label:'Preschoolers (3-5 years)', value:4},
  {label:'Middle Childhood (6-8 years)', value:5},
  {label:'Middle Childhood (9-11 years)', value:6},
  {label:'Young Teens (12-14 years)', value:7}
  ]

  const inoutOptions = [
  {label:'indoor', value:'in'},
  {label:'outdoor', value:'out'}
  ]

  const costOptions = [
  {label:'$', value:'lowCost'},
  {label:'$$', value:'medCost'},
  {label:'$$$', value:'highCost'}
  ]

  const effortOptions = [
  {label:'Low', value:'lowEffort'},
  {label:'Medium', value:'medEffort'},
  {label:'High', value:'highEffort'}
  ]

  const weatherOptions = [
  {label:'Fair', value:'fair'},
  {label:'Rain', value:'rain'},
  {label:'Snow', value:'snow'}
  ]

  const initialData = {
    'age': 2,
    'inOut':'in',
    'weather': 'fair',
    'cost': 'low',
    'effort': 'low'
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

  ];

  async function onSubmit(data) {

    console.log(data)
}


  return (
    <View style={styles.container}>
      <Form
        title={"Generate"}
        fields={fields}
        initialData={initialData}
        onSubmit={onSubmit}

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
