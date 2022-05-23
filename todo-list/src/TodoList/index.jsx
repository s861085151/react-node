import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Index() {
  const [list, setList] = useState([]);
  const listLenRef = useRef(0)
  useEffect(() => {
    listLenRef.current = list.length;
  })

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/todolist').then(res => {
      setList(res.data)
    })
  }, [])

  const handleAddItem = useCallback(
    (value) => {
      const item = {
        id: listLenRef.current,
        value
      }
      axios.post('http://127.0.0.1:3001/todolist', {
        item
      }).then(res => {
        setList(res.data)
      })
    }, []
  )

  const handleDelItem = useCallback(
    (id) => {
      axios.delete('http://127.0.0.1:3001/todolist', {
        data: {
          id
        }
      }).then(res => {
        setList(res.data)
      })
    }, []
  )


  return (
    <div>
      <TodoForm onAddItem={handleAddItem} />
      <TodoList data={list} onDelItem={handleDelItem} />
    </div>
  )
}
