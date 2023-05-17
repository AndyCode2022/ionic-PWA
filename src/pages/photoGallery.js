import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonPage, IonContent} from '@ionic/react';

const photoGallery = () => (

  <>
    <IonPage>
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

        <iframe
          width="600"
          height="450"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=API_KEY
            &q=Space+Needle,Seattle+WA">
        </iframe> 

      </IonContent>
    </IonPage>
  </>

);

export default photoGallery;