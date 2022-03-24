import React from 'react';

import {
    MainContain,
    MainWrapper,
    LeftCard,
    RightCard,
    Avat,
    Head,
    Para,
    Head2,
    Para2
} from './Card.Element'


const Card = (props) => {
  return (
    <MainContain>
        <MainWrapper fd ={props.fd}>
            <LeftCard bg ={props.bg}>
                <Avat src={props.Images}/>
                <Head>{props.Header}</Head>
                <Para>{props.Paragraph}</Para>
            </LeftCard>
            <RightCard>
                <Head2>OUR VISION</Head2>
                <Para2>Our vision is: building people with dignity and self-worth. Every human being should have the same opportunity. More than 100 million Nigerians lack access to basic amenities—from clean water and electricity quality education and liberty to participate in the economy, as equal citizens. We are about changing these phenomena. We believe everyone should be able to live with dignity, without dependence. We are a Non-Governmental Organization, based in Lagos Nigeria. We strive to protect and feed the poor, advocate and enlighten communities, empower young people, serve as the voice to the voiceless, we give grants and scholarship, we serve as an outstretched arm of God, we bring succor and hope to the need</Para2>
            </RightCard>
        </MainWrapper >
    </MainContain>
  )
}

export default Card;

