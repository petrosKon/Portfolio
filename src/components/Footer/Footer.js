import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
        <LinkList>
            <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:+306974854462">+306974854462</LinkItem>
            </LinkColumn>
             <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:kontrazis-petros@hotmail.com">kontrazis-petros@hotmail.com</LinkItem>
            </LinkColumn>
        </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
