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
    const [bio,setBio] = useState()
    const [year,setYear] = useState()
    const [git,setGit] = useState()
    const [linkd,setLinkd] = useState()
    const [insta,setInsta] = useState()
    const [web,setWeb] = useState()
    const [dp,setDp] = useState()


    async function getUser()
    {
        let CurrentAuthUser = await user

        if(CurrentAuthUser == null)
        {

        }

        else{

            setDp(user.photoURL)

            var Userdetails = db.collection('user').doc(user.email).get()
            Userdetails.then(res => {
                setEmail(res.data().email)
                setUsername(res.data().username)
                setYear(res.data().year)
                setWeb(res.data().web)
                setInsta(res.data().insta)
                setLinkd(res.data().linkdin)
                setGit(res.data().github)
            })
        }
    }

    getUser()
    console.log('woses',user?.email)
    return (
        <div className = 'MyProfile'>
            <h1 style={{color: "white",marginLeft:"10%",marginTop:"5%"}}>{username}'s Profile</h1>
            <MyProfileContainer>
                <MyProfileCard>

                    <MyProfileImg src = {dp}/>
                    <MyProfileContents>
                        Name : {username}
                    </MyProfileContents>
                    <MyProfileContents>
                        E-mail: {email}
                    </MyProfileContents>
                
                    <MyProfileContents>
                        Year: {year}
                    </MyProfileContents>

                    <MyProfileContents>
                        Github Link: <a href="#">{git}</a> 
                    </MyProfileContents>

                    <MyProfileContents>
                        Linkedin Link: <a href="#">{linkd}</a>
                    </MyProfileContents>

                    <MyProfileContents>
                        Instagram Link: <a href="#">{insta}</a>
                    </MyProfileContents>

                    <MyProfileContents>
                        Website Link: <a href="#">{web}</a>
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