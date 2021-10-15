import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { auth,db } from "../Firebase";
import { useStateValue } from "../StateProvider";
import {Link as LinkR} from 'react-router-dom'
import './Profile.css'

const MyProfileContainer = styled.div`
    display : flex;
    justify-content : center;
    width : 100%;
    height : 100vh;

`

const MyProfileCard = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    height : 70%;
    width : 80%;
    margin-top : 100px;
    
    
`

const MyProfileContents = styled.div`
    font-size : 1.2rem;
    font-family : sans-serif;
    margin-top : 20px;
    color : white;
    width : 50%;
`

const MyProfileImg = styled.img`
    width : 30%;
    height : 70%;
`

const MyProfileYear = styled.div`
    font-size : 1.2rem;
    font-family : sans-serif;
    margin-top : 20px;
    color : white;
`
const MyProfileLinks = styled(LinkR)`
    font-size : 1.2rem;
    font-family : sans-serif;
    margin-top : 20px;
    color : white;
`





const Profile = () => {

    const [{ user }, dispatch] = useStateValue();
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()

    

    // console.log('woses',user?.email)
    return (
        <div className = 'MyProfile'>
            <h1 style={{color: "white",marginLeft:"10%",marginTop:"5%"}}>{user.displayName}'s Profile</h1>
            <MyProfileContainer>
                <MyProfileCard>

                    <MyProfileImg src = {user.photoURL}/>
                    <MyProfileContents>
                        Name : {user.displayName}
                    </MyProfileContents>
                    <MyProfileContents>
                        E-mail: {user.email}
                    </MyProfileContents>
                    
                </MyProfileCard>
            </MyProfileContainer>
        </div>
    )
}

export default Profile