import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../images/daclogo.png'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to='/'>Our Team</FooterLink>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Terms and Conditions</FooterLink>
                <FooterLink to='/'>Privacy Policy</FooterLink>
                <FooterLink to='/'>Copyrights</FooterLink>
            </FooterLinkItems>
            {/* <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Support</FooterLink>
                <FooterLink to='/'>Destinations</FooterLink>
                <FooterLink to='/'>Sponsorships</FooterLink>
            </FooterLinkItems> */}
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            {/* <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to='/'>Submit Video</FooterLink>
                <FooterLink to='/'>Ambassadors</FooterLink>
                <FooterLink to='/'>Agency</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink>
            </FooterLinkItems> */}
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink href='https://www.instagram.com/dac_vit_chennai/'>Instagram</FooterLink>
                <FooterLink href='https://discord.gg/FzPzajkh3A'>Discord</FooterLink>
                <FooterLink href='https://www.linkedin.com/company/dacvitcc/'>LinkedIn</FooterLink>
                <FooterLink href='https://github.com/Data-Analytics-Club-VITCC'>Github</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
                
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            <img src={Logo} width="90px" height="90px"/> Data Analytics Club
            </SocialLogo>
            <SocialIcons>
              {/* <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink> */}
              <SocialIconLink href='https://www.instagram.com/dac_vit_chennai/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='https://discord.gg/FzPzajkh3A' target='_blank' arial-label='Discord'>
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/company/dacvitcc/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/Data-Analytics-Club-VITCC' target='_blank' arial-label='Github'>
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
            
          </SocialMediaWrap>
          <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
            <WebsiteRights>Data Analytics Club © 2021 All rights reserved.</WebsiteRights>
          </div>
          
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
