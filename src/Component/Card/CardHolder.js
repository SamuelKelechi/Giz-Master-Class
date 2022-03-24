import React from 'react'
import Card from './Card'
import Icon1 from '../Images/icon1.png'
import Icon2 from '../Images/icon2.png'
import Icon3 from '../Images/icon3.png'



function CardHolder() {
  return (
    <div>
        <Card 
        Header='OUR MISSION'
        Paragraph='At the core of our values, is the utmost goal of making individual lives, whether old or young, and communities of people, better than we meet it.'
        Images={Icon1}
        bg='#003399'
        />

        <Card 
        Header='OUR VISION'
        Paragraph='At the core of our values, is the utmost goal of making individual lives, whether old or young, and communities of people, better than we meet it.'
        Images={Icon2}
        bg='#25AAE2'
        fd='row-reverse'
        />

        <Card 
        Header='VOLUNTEER'
        Paragraph='At the core of our values, is the utmost goal of making individual lives, whether old or young, and communities of people, better than we meet it.'
        Images={Icon3}
        bg='#3AB54A'

        />




    </div>
  )
}

export default CardHolder