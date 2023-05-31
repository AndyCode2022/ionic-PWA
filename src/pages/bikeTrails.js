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
     
        <IonImg src={bikeTrails1} alt="bikeTrail image features bumpy dirt tracks and trees"></IonImg>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Dirt Haven</IonCardTitle>
            <IonCardSubtitle>Swirly traks through the hills and around tight corners</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Here you will find excitement and fullfillment. Come to our trail now!
          </IonCardContent>
        </IonCard>



        <IonImg src={bikeTrails2} alt="bikeTrail image features bumpy dirt tracks and trees"></IonImg>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Forest tracks</IonCardTitle>
            <IonCardSubtitle>Trees and the wildlife</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            On this track you will find rabbits, deers, and all sorts of wildlife!
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  </>
);

export default bikeTrails;