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
    height : 100%;
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

const Profile = () => {

    const [{ user }, dispatch] = useStateValue();
    console.log('woses',user?.email)
    return (
        <div className = 'MyProfile'>
            <h1 style={{color: "white",marginLeft:"10%",marginTop:"5%"}}>ABC's Profile</h1>
            <MyProfileContainer>
                <MyProfileCard>

                    <MyProfileImg src = "https://cdn.dribbble.com/users/2851002/screenshots/6459394/facerig2.gif"/>
                    <MyProfileContents>
                        Name: ABC
                    </MyProfileContents>
                    <MyProfileContents>
                        E-mail: ABC@gmail.com
                    </MyProfileContents>
                
                    <MyProfileContents>
                        Year: 2nd
                    </MyProfileContents>

                    <MyProfileContents>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque magni neque, quidem veniam iste ab quis officiis fuga incidunt minima distinctio! Sunt quaerat aliquam laudantium commodi dolorum placeat ducimus.
                    </MyProfileContents>

                    <MyProfileContents>
                        Github Link: <a href="#">abc@github.com</a> 
                    </MyProfileContents>

                    <MyProfileContents>
                        Linkedin Link: <a href="#">www.linkedin.com/abc</a>
                    </MyProfileContents>

                    <MyProfileContents>
                        Instagram Link: <a href="#">www.instagram.com/abc</a>
                    </MyProfileContents>

                    <MyProfileContents>
                        Website Link: <a href="#">www.abc.com</a>
                    </MyProfileContents>

                    <br/>
                    <br/>
                    <br/>
                    <h2 style={{color:"white"}}> Projects </h2>
                    <br/>
                    <br/>
                    <br/>
                    <h2 style={{color:"white"}}>Blogs Contributed</h2>
                    
                </MyProfileCard>
            </MyProfileContainer>
        </div>
    )
}

export default Profile