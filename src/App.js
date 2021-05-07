
import { Fragment, useState } from 'react';

import UserInfoInput from './components/UserInfoInput/UserInfoInput';
import UserInfoList from './components/UserInfoList/UserInfoList';

function App() {
  const [userInfo,setUserInfo] = useState([{
    name : "Bella",
    age : "19",
    id : "g1"
  },
  {
    name : "Yoki",
    age : "19",
    id : "g2"
  }]);
  const getUserInfoHandler = (newUserInfo) =>{
    setUserInfo(prevInfo => {
      return [...prevInfo,newUserInfo]
    });
  };
  return (
    <Fragment>
      <UserInfoInput getUserInfo={getUserInfoHandler}/>
      <UserInfoList userInfo={userInfo}/>
    </Fragment>
  );
}

export default App;
