import { View, Text, Pressable, TextInput, SafeAreaView, ScrollView,ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../android/feature/todo/todoSlice';

const Todo = () => {

  const DeleteToast = () => {
    ToastAndroid.show('You just Deleted a task !', ToastAndroid.SHORT);
  };

  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  const startEditing = (todo: any) => {
    setEditingTodoId(todo.id);
    setEditText(todo.text);
  };

  const doneEditing = () => {
    if (editText.trim() !== '') {
      dispatch(updateTodo({ id: editingTodoId, text: editText }));
    }
    setEditingTodoId(null);
    setEditText('');
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.34)',
        height: 530,
        width: 370,
        marginTop: 20,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
        borderWidth: 3,
        borderColor: 'red',
      }}
    >
      <Text style={{ marginTop: 10, fontSize: 25, color: 'white', marginBottom: 10 }}>Todo</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          padding: 10,
          borderWidth: 3,
          borderRadius: 10,
          borderColor: 'rgba(255, 0, 0, 0.62)',
          paddingHorizontal: 0,
          width: 350,
          backgroundColor: 'rgba(255, 255, 255, 0.34)',
        }}
      >
        {todos.map((todo: any) => (
          <View
            key={todo.id}
            style={{
              backgroundColor: 'white',
              width: '95%',
              height: 60,
              borderRadius: 7,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              paddingRight: 20,
              marginBottom: 10,
              left: 8.6,
            }}
          >
            {editingTodoId === todo.id ? (
              <TextInput
                placeholder="Edit todo..."
                style={{ fontSize: 20, height: 60, color: 'grey', flex: 1 }}
                value={editText}
                onChangeText={setEditText}
              />
            ) : (
              <Text style={{ fontSize: 20, color: 'rgb(255, 38, 0)', fontWeight: '500', flex: 1 }}>
                {todo.text}
              </Text>
            )}

            <View style={{ flexDirection: 'row', gap: 6 }}>
              {editingTodoId === todo.id ? (
                <Pressable
                  style={{
                    backgroundColor: 'rgb(136, 255, 0)',
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    marginRight: 5,
                  }}
                  onPress={doneEditing}
                >
                  <Text style={{ color: 'black', fontSize: 20 }}>✔︎</Text>
                </Pressable>
              ) : (
                <Pressable
                  style={{
                    backgroundColor: 'rgb(136, 255, 0)',
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    marginRight: 5,
                  }}
                  onPress={() => startEditing(todo)}
                >
                  <Text style={{ color: 'black', fontSize: 20 }}>✎</Text>
                </Pressable>
              )}


              <Pressable
                style={{
                  backgroundColor: 'red',
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 4,
                }}
                onPress={() => dispatch(removeTodo(todo.id), DeleteToast())}
              >
                <Text style={{ color: 'white', fontSize: 18 }}>X</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Todo;
