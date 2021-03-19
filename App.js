import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form, {TYPES} from 'react-native-basic-form';
import activityData1 from './data/activityData1';
import activityData2 from './data/activityData2';
import activityData3 from './data/activityData3';
import activityData4 from './data/activityData4';
import activityData5 from './data/activityData5';
import activityData6 from './data/activityData6';
import activityData7 from './data/activityData7';


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
    // Change database based on age input
    // Traverse based on other inputs
    // choose random activity based on count
    // render activity
    let db;
    data['age'] === 1 ?
      db = activityData1 :
    data['age'] === 2 ?
      db = activityData2 :
    data['age'] === 3 ?
      db = activityData3 :
    data['age'] === 4 ?
      db = activityData4 :
    data['age'] === 5 ?
      db = activityData5 :
    data['age'] === 6 ?
      db = activityData6 :
      db = activityData7;

    console.log(db);
    //console.log(activityData1[0]);
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
