import React from 'react';
import { IonImg, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonCard } from '@ionic/react';
import bikeTrails1 from '../images/bikeTrails1.jpg';
import bikeTrails2 from '../images/bikeTrails2.jpg';

const bikeTrails = () => (
  <>
{/* Bike Trails */}

<IonImg src={bikeTrails1} alt="bikeTrail"></IonImg>

<IonCard>
  <IonCardHeader>
    <IonCardTitle>Card Title</IonCardTitle>
    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
  </IonCardHeader>

  <IonCardContent>
    Here's a small text description for the card content. Nothing more, nothing less.
  </IonCardContent>
</IonCard>



<IonImg src={bikeTrails2} alt="bikeTrail"></IonImg>

<IonCard>
  <IonCardHeader>
    <IonCardTitle>Card Title</IonCardTitle>
    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
  </IonCardHeader>

  <IonCardContent>
    Here's a small text description for the card content. Nothing more, nothing less.
  </IonCardContent>
</IonCard>
</>
);

export default bikeTrails;