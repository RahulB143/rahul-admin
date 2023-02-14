import React from 'react'
import { useEffect, useState } from "react";
 import AppCss from './App.css'
 import styles from './style.module.css'
 import Card from './card/index'


function App() {
  const [data, getData] = useState([]);
  const fetchData = () => {
    fetch("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
      .then((res) => res.json())
 
      .then((response) => {
        console.log(response);
        getData(response);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  const [selectedUser, selectUser] = useState(null)
  const [search, setSearch] = useState('')
  //const [list, setList] = useState(data)

  const onClickItem = item => {
    selectUser(item)
  }
  const onChangeInput = e => {
    const { value } = e.target

    setSearch(value)
    console.log(value)

    const newUsers = data.filter(
      i =>
        i.firstName.toLowerCase().includes(value.toLowerCase()) ||
        i.lastName.toLowerCase().includes(value.toLowerCase())
    )
    console.log(value)


    getData(newUsers)
    console.log(newUsers)

  }
  return (
    <div className='container'>
    <div id='admin'>
      <h1>Basic Admin Panel</h1>
      <input
        placeholder='Search User name'
        value={search}
        onChange={onChangeInput}
      />
      <tbody>
        <tr>
          <th className='id'>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {data.map((item, i) => (
          
          <tr key={i} style={{
            background:
              selectedUser && selectedUser.id === item.id ? 'lightblue' : 'white'
          }}
          className={styles.listItem}
          onClick={() => onClickItem(item)}>
            <td className='id'>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            

          </tr>
        ))}
      </tbody>
    </div>
    <div id='details'>
      <h1>Details</h1>
      {selectedUser && <Card user={selectedUser} />}
    </div>
    </div>
  );
}
 
export default App;
 