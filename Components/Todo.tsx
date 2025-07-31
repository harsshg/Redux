import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../android/feature/todo/todoSlice'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'


const Todo = () => {

 const todo =  useSelector((state:any)=>state.todos)

 const dispatch = useDispatch()
  return (
    <SafeAreaView style={{backgroundColor:'rgba(255, 255, 255, 0.34)',height:530,width:370,marginTop:20,borderRadius:20,alignItems:'center',padding:10,borderWidth:3,borderColor:'red'}}>
        
      <Text style={{marginTop:10,fontSize:25,color:'white',marginBottom:10}}>Todo</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={{padding:10,borderWidth:3,borderRadius:10,borderColor:'rgba(255, 0, 0, 0.62)',paddingHorizontal:0,width:350,backgroundColor:'rgba(255, 255, 255, 0.34)'}} >
      {todo.map((todo:any)=>(
       <View key={todo.id} style={{backgroundColor:'white',width:'95%',height:50,borderRadius:7,alignItems:'center',display:'flex',flexDirection:'row',justifyContent:'space-between',padding:10,paddingRight:20 ,marginBottom:10,left:8.6
       }}>
         <Text style={{fontSize:20,color:'rgb(255, 38, 0)',fontWeight:500}}>{todo.text}</Text> {/*{todo.text} */}
         <Pressable
         style={{backgroundColor:'red',width:30,height:30,alignItems:'center',justifyContent:'center',borderRadius:4}}
         onPress={()=>dispatch(removeTodo(todo.id))}><Text style={{color:'white',fontSize:20}} >X</Text></Pressable>
       </View>
     ))} 
     </ScrollView>
    </SafeAreaView>
  )
}

export default Todo