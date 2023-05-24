import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';

import Menu from '../components/menu';

const photoGallery = () => (

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
      
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Bike King Borders Location</IonCardTitle>
            <IonCardSubtitle>This is where to find us!</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            We are located in the borders region of Scotland.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7839.979617218368!2d-3.0840117214063985!3d57.60785608360987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48850782068d2095%3A0x8c6f53e799b6f0c6!2sMoray%20Monster%20Trails!5e0!3m2!1sen!2suk!4v1684934676367!5m2!1sen!2suk" width="100%" className="map" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </IonCard>


      </IonContent>
    </IonPage>
  </>

);

export default photoGallery;