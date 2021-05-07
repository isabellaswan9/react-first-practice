import React from 'react';

import Card from '../UI/Card';
import styles from './UserInfoList.module.css';
import UserInfoItem from '../UserInfoItem/UserInfoItem';

const UserInfoList = (props) =>{
    
    return <Card className={styles.users}>
    <ul>
        {props.userInfo.map(info => (
            <UserInfoItem key={info.id} name={info.name} age={info.age} className={styles.users}/>)
            //<li key={info.id}>
            //{info.name} ({info.age} years old)
            //</li>)
        )}
    </ul>
    </Card>
};

export default UserInfoList;