import React, { useCallback } from 'react'

export default function TodoList(props) {
  const { onDelItem } = props;

  const handleDelItem = useCallback(
    (record) => () => {
      onDelItem && onDelItem(record.id)
    },
    [onDelItem],
  )


  return (
    <ul>
      {
        props.data.map((item) => (
          <li key={item.id}>
            <span>{item.value}</span>
            <button onClick={handleDelItem(item)}>删除</button>
          </li>
        ))
      }
    </ul>
  )
}
