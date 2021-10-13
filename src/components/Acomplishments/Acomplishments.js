import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Projects on Both VR,AR & Mobile'},
  { number: 1, text: 'XR4ALL European award at MAGOS', },
  { number: 3, text: 'years of experience in both VR,AR & Mobile', },
  { number: 1, text: 'deployed application'}
];

const Acomplishments = () => (
   <Section>
   <SectionDivider/>
   <br />
   <SectionTitle> Personal Accomplishments</SectionTitle>
   <Boxes>
    {data.map((card, index) => (
        <Box key={index}>
            <BoxNum>
                {card.number}
            </BoxNum>
            <BoxText>
                {card.text}
            </BoxText>
        </Box>
    ))}
   </Boxes>
   </Section>
);

export default Acomplishments;
