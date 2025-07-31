import { View, Text, Pressable, TouchableHighlight, TouchableOpacity } from 'react-native'
import  { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { TextInput } from 'react-native'
import {addTodo} from '../android/feature/todo/todoSlice'
import {useDispatch} from 'react-redux'


const AddTodo = () => {

    const[input,setInput]=useState('')
    const dispatch = useDispatch()


    const addtodoHandler =()=>{ // Removed 'e:any' as it's not needed for this action
        if (input.trim()) { // Basic validation: only dispatch if input is not empty
            dispatch(addTodo(input));
            setInput('');
        }
    }

    return (
    <SafeAreaView style={{alignItems:'center',gap:0,padding:40,borderWidth:3,borderColor:'red',borderRadius:10,backgroundColor:'rgba(255, 255, 255, 0.34)'}}>
        <TextInput
        placeholder='Enter your Task Here '
        value = {input}
        onChangeText={setInput} // Change 'onChange' to 'onChangeText'
        style={{borderColor:'grey',borderWidth:2,borderRadius:10,fontSize:20,fontWeight:500,marginBottom:14,width:280,backgroundColor:'rgba(255, 255, 255, 0.42)',color:'rgb(255, 0, 0)'}}
        />
        <TouchableOpacity
        style={{height:35,width:90,borderWidth:2,alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'rgb(255, 0, 38)',opacity:.9}}
        onPress={addtodoHandler}>
            <Text style={{fontWeight:500,color:'white'}}>Add Task</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default AddTodo