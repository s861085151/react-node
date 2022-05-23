import React, { useRef, useCallback } from 'react'

export default function TodoForm(props) {
  const inputRef = useRef(null);
  const { onAddItem } = props;

  const handleAdd = useCallback(
    () => {
      onAddItem && onAddItem(inputRef.current.value)
    },
    [onAddItem],
  )


  return (
    <div className='todo-form'>
      <input type="text" ref={inputRef} />
      <button onClick={handleAdd}>添加</button>
    </div>
  )
}
