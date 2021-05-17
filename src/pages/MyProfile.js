import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { auth,db } from "../Firebase";
import { useStateValue } from "../StateProvider";
import {Link as LinkR} from 'react-router-dom'
import './MyProfile.css'

const MyProfileContainer = styled.div`
    display : flex;
    justify-content : center;
    width : 100%;
    height : 100%;
    margin-top : 100px;
`

const MyProfileCard = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    height : 70%;
    margin-top : 100px;
    
    

`

const MyProfileContents = styled.div`
    font-size : 1.2rem;
    font-family : sans-serif;
    margin-top : 20px;
    color : white;
    width : 400px;
`

const MyProfileImg = styled.img`
    width : 50%;
    height : 100%;
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

const MyProfile = () => {

    const [{ user }, dispatch] = useStateValue();
    console.log('woses',user?.email)
    return (
        <div className = 'MyProfile'>
            <MyProfileContainer>
                <MyProfileCard>

                    <MyProfileImg src = "https://cdn.dribbble.com/users/2851002/screenshots/6459394/facerig2.gif"/>
                    <MyProfileContents>
                        Name
                    </MyProfileContents>
                    <MyProfileContents>
                        E-mail
                    </MyProfileContents>
                
                    <MyProfileContents>
                        Year
                    </MyProfileContents>

                    <MyProfileContents>
                    You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
                    </MyProfileContents>

                    <MyProfileLinks>
                        Links
                    </MyProfileLinks>
                </MyProfileCard>
            </MyProfileContainer>
        </div>
    )
}

export default MyProfile
