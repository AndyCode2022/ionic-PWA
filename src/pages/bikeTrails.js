import React from 'react';
import { IonImg, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonCard, IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import bikeTrails1 from '../images/bikeTrails1.jpg';
import bikeTrails2 from '../images/bikeTrails2.jpg';

import Menu from '../components/menu';

const bikeTrails = () => (
  <>
<Menu></Menu>
    <IonPage id="main-content">

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
     
        <IonImg src={bikeTrails1} alt="bikeTrail"></IonImg>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Dirt Haven</IonCardTitle>
            <IonCardSubtitle>Swirly traks through the hills and around tight corners</IonCardSubtitle>
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

      </IonContent>
    </IonPage>
  </>
);

export default bikeTrails;