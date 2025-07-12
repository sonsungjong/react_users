import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import UserList from './components/UserList.jsx'
import { setUsers } from './store/slices/userSlices.js'


function App() {
  
  // https://fakestoreapi.com/users
  // 리덕스에 저장해서 사용 npm install @reduxjs/toolkit react-redux
  // 리덕스 store를 만들어서 createSlice 에 저장
  // useDispatch(함수), useSelector(변수) 로 가져와서 사용
  let dispatch = useDispatch();

  // App 컴포넌트가 처음 실행되면 fetch로 계정 정보 가져오기
  useEffect(()=>{
    async function fetchUsers(){
      // 그냥 주소만 적으면 GET요청
      let res = await fetch('https://fakestoreapi.com/users')
      // 잘 받아왔으면 이어서 작업
      if(res.ok){
        // 사이트에서 json형태로 주었으니 자바스크립트 형태(data)로 바꾼다
        let data = await res.json();
        // 어떤 메시지를 받았는지 확인해보자
        console.log(data);

        // 받은 객체배열을 리덕스에 저장하자
        dispatch(setUsers(data)); // action.payload에 data가 들어감
      }
    }

    fetchUsers();
  }, [])

  return (
    <div>
      <h1>유저 목록</h1>
      <UserList />
    </div>
  )
}

export default App
