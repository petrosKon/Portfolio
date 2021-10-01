import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
       <SectionTitle main center>
         Welcome To <br />
         My Personal Portfolio, <br />
         I Am Petros Kontrazis
       </SectionTitle>
       <SectionText>
       I am a Unity and Android developer with over 3 years of experience. I now mainly work with VR and AR and this site is for showcasing my current work. 
       </SectionText>
       <Button onClick={() => window.location = '../#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;