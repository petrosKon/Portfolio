import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { FaUnity, FaAndroid, FaMobile } from 'react-icons/fa';
import { SiOculus, SiCsharp, SiJava } from 'react-icons/si';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have worked with multiple VR and AR accessories and hardware and as well as Unity and Android Technologies</SectionText>
    <List>
        <ListItem>
            <FaUnity size="3rem"/>
            <br />
            <ListContainer>
                <ListTitle>Unity</ListTitle>
                <ListParagraph>3 years of experience with <br/> Unity</ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <SiCsharp size="3rem"/>
            <br />
            <ListContainer>
                <ListTitle>C#</ListTitle>
                <ListParagraph>3 years of experience with <br/> C# and visual studio in Unity</ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <SiOculus size="3rem"/>
            <br />
            <ListContainer>
                <ListTitle>Oculus</ListTitle>
                <ListParagraph>7 Applications developed in both Oculus Rift & Quest</ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <SiOculus size="3rem"/>
            <br />
            <ListContainer>
                <ListTitle>Oculus</ListTitle>
                <ListParagraph>7 Applications developed in both Oculus Rift & Quest</ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <FaAndroid size="3rem"/>
            <br />
            <ListContainer>
                <ListTitle>Android</ListTitle>
                <ListParagraph>2 Applications developed on Android for mobile and one deployed</ListParagraph>
            </ListContainer>
        </ListItem> 
        <ListItem>
            <SiJava size="3rem"/>
            <br />
            <ListContainer>
                <ListTitle>Java</ListTitle>
                <ListParagraph>2 years of experience in Java as an Android developer</ListParagraph>
            </ListContainer>
        </ListItem>
    </List>

  </Section>
);

export default Technologies;
