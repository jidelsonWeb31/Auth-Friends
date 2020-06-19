import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function FriendsList() {
    const [friendsList, setFriendsList] = useState([])

    const getData = evt => {
        evt.preventDefault();
        axiosWithAuth()
        .get('/api/friends', friendsList)
        .then(res =>{
            console.log(res),
            setFriendsList({
                
               friendsList: res.data.data.map((friendsList) => {
                   <div>
                       <p>{friendsList.username}</p>
                       <p>{friendsList.password}</p>
                   </div>
               })
            })
         })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div>

        </div>
    )
}

export default FriendsList;