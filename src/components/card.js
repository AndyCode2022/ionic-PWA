import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';

const Card = ({heading, content}) => {


        console.log("{title, subtitle, body, image, alt}");



    return (
        <>
            <h1>{heading}</h1>
            <p>{content}</p>

        </>

    )
};

export default Card;
