import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../images/daclogo.png'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const clickHandler = (link) => {
    window.open(link)
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Who We Are</FooterLinkTitle>
                <FooterLink to='/'>About Us</FooterLink>
                <FooterLink to='/'>Our Team</FooterLink>
                <FooterLink to='/'>Blog</FooterLink>
                <FooterLink to='/'>Contact</FooterLink>
                
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Subscriptions</FooterLinkTitle>
                <FooterLink to='/'>Blogs</FooterLink>
                <FooterLink to='/'>Events</FooterLink>
                <FooterLink to='/'>News</FooterLink>
                <FooterLink to='/'>Research Articles</FooterLink>
            </FooterLinkItems>
            
            
          </FooterLinkWrapper>

          <FooterLinkWrapper>
          <FooterLinkItems>
              <FooterLinkTitle>Legal</FooterLinkTitle>
              <FooterLink onClick = {e => clickHandler('https://www.termsandconditionsgenerator.com/live.php?token=r9UD7Q1roYHikuT6nWWrFl3hWeRgJRB3')}>Terms and Conditions</FooterLink>
                <FooterLink onClick = {e => clickHandler('https://www.privacypolicygenerator.info/live.php?token=J7PZoxWEfokFdxPZoJYsU8PPZV5NaUZa')}>Privacy Policy</FooterLink>
                <FooterLink onClick = {e => clickHandler('https://www.disclaimergenerator.net/live.php?token=zUVTCdzTnR5b9SFgcMiUsjEmDRfDgGa6')}>Disclaimer</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink onClick = {e => clickHandler('https://www.instagram.com/dac_vit_chennai/')}>Instagram</FooterLink>
                <FooterLink onClick = {e => clickHandler('https://discord.gg/FzPzajkh3A')}>Discord</FooterLink>
                <FooterLink onClick = {e => clickHandler('https://www.linkedin.com/company/dacvitcc/')}>LinkedIn</FooterLink>
                <FooterLink onClick = {e => clickHandler('https://github.com/Data-Analytics-Club-VITCC')}>Github</FooterLink>
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
              <SocialIconLink href='https://www.linkedin.com/company/dacvitcc/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/Data-Analytics-Club-VITCC' target='_blank' arial-label='Github'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
            </SocialIcons>
            
          </SocialMediaWrap>
          <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
            <WebsiteRights>Data Analytics Club © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
          </div>
          
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
