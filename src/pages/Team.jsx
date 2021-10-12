import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
import React,{useState} from 'react'
import './team.css'
import CuratorImg from '../images/Curator.png'
import SocialitesImg from '../images/Socialites.png'
import HeadHunterImg from '../images/headhunters.png'
import ExplorersImg from '../images/explorers.png'
import AnalystsImg from '../images/analysts.png'
import Sidebar from '../components/SideBar/Sidebar'
import Navbar from '../components/Navbar/Navbar'



export const Card = styled.div`
    margin-top : 80px;
    box-shadow : green;
    display : flex;
    width : 100%;
    z-index : 5;
    display : flex;
    justify-content : center;
    `;

export const CardContainer = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
    width : 70%;
`

export const CardServices = styled(LinkR)`
display : flex;
flex-direction : column;
overflow: hidden;
background-color : black;
padding: 0 0 32px;
margin: 48px auto 0;
width: 100%;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
border-radius: 20px;
height : 600px;
position : relative;
color : black;
justify-content : center;
text-decoration : none;

&:hover
{
    transition : all 0.2s ease-out;
    /* transform : scale(1.03); */
    text-decoration : none;
    color : black;
    border : 2px solid white;
    color : black;
    
}
`;

export const CardHeaderContainer = styled.div`
    display : flex;
    justify-content : center;
    margin-bottom : 100px;
    margin-top : 100px;
`;

export const CardHeader = styled.div`
    justify-content : center;
    font-family : sans-serif;
    font-size : 2.2rem;
    font-weight : bold;
    color : white;

`;


export const CardImg = styled.img`
    height: 200px;
    width: 220px;

    @media screen and (max-width: 768px) {
    height : 100px;
    width : 110px;
  }

`;


export const CardBodyContainer = styled.div`
    display : flex;
    justify-content : center;
    margin-bottom : 100px;
    width : 100%;
`;

export const CardBody = styled.div`
    justify-content : center;
    height: auto;
    color : white;
    margin-right : 10px;
    @media screen and (max-width: 768px) {
    display :none;
  }
`;
export const CardFooterContainer = styled.div`
    display : flex;
    justify-content : center;
    margin-bottom : 100px;

    @media screen and (max-width: 768px) {
    align-items : center;
    justify-content : center;
    text-align : center;
  }
`;

export const CardFooter = styled.div`
    justify-content : center;
    font-family : sans-serif;
    margin-top : 40px;
    height : auto;
    color : white;

    
`;

const CardContents = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    
    @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items : center;
    justify-content : center;
  }
`

const Team = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
    console.log("Button is clicked");
    setIsOpen(!isOpen);
    }

    return (
        <div className = "Team">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Card>
                <CardContainer>
                    <CardServices >
                        <CardContents>
                            <CardHeaderContainer>
                                <CardHeader>
                                    Curators
                                </CardHeader>
                            </CardHeaderContainer>

                            <CardBodyContainer>
                                <CardImg src = {CuratorImg}/>
                                <CardBody>
                                Curators
                                are responsible for creating posters and
                                videos as required, designing posts and
                                curating the content that goes up on our
                                social media handles(eg reels and posts)
                                and blog (in case).
                                </CardBody>
                            </CardBodyContainer>

                            <CardFooterContainer>
                                <CardFooter>
                                    Department Head Names and details
                                </CardFooter>
                            </CardFooterContainer>
                        </CardContents>  
                    </CardServices>

                    <CardServices>
                        <CardContents>
                            <CardHeaderContainer>
                                <CardHeader>
                                    Socialites
                                </CardHeader>
                            </CardHeaderContainer>

                            <CardBodyContainer>
                                <CardImg src = {SocialitesImg}/>
                                <CardBody>
                                Socialites are responsible for the
effective handling and administration
of all the social media handles of the
Club. ( Instagram account and other
handles)
                                </CardBody>
                            </CardBodyContainer>

                            <CardFooterContainer>
                                <CardFooter>
                                    Department Head Names and details
                                </CardFooter>
                            </CardFooterContainer>
                        </CardContents>  
                    </CardServices>

                    <CardServices>
                        <CardContents>
                            <CardHeaderContainer>
                                <CardHeader>
                                    HeadHunters
                                </CardHeader>
                            </CardHeaderContainer>

                            <CardBodyContainer>
                                <CardImg src = {HeadHunterImg}/>
                                <CardBody>
                                Responsible not only for filing event
proposals but maintaining a record
of events, handling FFCS members,
and data regarding clubs. Also are
required to conduct meetings, team
bonding sessions, etc.
                                </CardBody>
                            </CardBodyContainer>

                            <CardFooterContainer>
                                <CardFooter>
                                    Department Head Names and details
                                </CardFooter>
                            </CardFooterContainer>
                        </CardContents>  
                    </CardServices>

                    <CardServices>
                        <CardContents>
                            <CardHeaderContainer>
                                <CardHeader>
                                    Explorers
                                </CardHeader>
                            </CardHeaderContainer>

                            <CardBodyContainer>
                                <CardImg src = {ExplorersImg}/>
                                <CardBody>
                                Explorers are responsible for helping the
Content Team out with topics and
providing resources (like datasets, etc)
however need be. (Topics for blog )
                                </CardBody>
                            </CardBodyContainer>

                            <CardFooterContainer>
                                <CardFooter>
                                    Department Head Names and details
                                </CardFooter>
                            </CardFooterContainer>
                        </CardContents>  
                    </CardServices>

                    <CardServices>
                        <CardContents>
                            <CardHeaderContainer>
                                <CardHeader>
                                    Analysts
                                </CardHeader>
                            </CardHeaderContainer>

                            <CardBodyContainer>
                                <CardImg src = {AnalystsImg}/>
                                <CardBody>
                                Analysts are responsible for making
projects and designing the website
for the club (recommended for
people with prior knowledge in data
analytics or a strong foundation in
programming or web development
skills)
                                </CardBody>
                            </CardBodyContainer>

                            <CardFooterContainer>
                                <CardFooter>
                                    Department Head Names and details
                                </CardFooter>
                            </CardFooterContainer>
                        </CardContents>  
                    </CardServices>
                </CardContainer>
            </Card>
        </div>
    )
}

export default Team
