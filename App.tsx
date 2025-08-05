import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Todo from './Components/Todo'
import AddTodo from './Components/AddTodo'
import { store } from './android/app/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
    
    <SafeAreaView style={{backgroundColor:'rgba(0, 0, 0, 0.84)' ,height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>

    <AddTodo/>
    <Todo/>
    </SafeAreaView>
    </Provider>
  )
}

export default App