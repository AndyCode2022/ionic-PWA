import React from 'react';
import { IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
// social media logos
import Facebook_logo from '../images/Facebook_logo.png';
import Instagram_logo from '../images/Instagram_logo.png';
import tripadvisor_logo from '../images/tripadvisor_logo.png';
import youtube_logo from '../images/youtube_logo.png';
import image2 from '../images/image2.jpg';
import { IonGrid, IonRow } from '@ionic/react';

import Menu from '../components/menu';

const contact = () => (
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
          <IonCardHeader><h1>Contact Us Here</h1></IonCardHeader>
          <IonCardSubtitle>
            <h2>Moray Street</h2><br></br>
            <h2>Elgin</h2>
            <h2>IV30 1JJ</h2>

            <h2>Opening hours</h2><br></br>

            <h2>Monday</h2>
            <h2>8:15am-4:30pm</h2>

            <h2>Tuesday</h2>
            <h2>8:15am-9:15pm</h2>

            <h2>Wednesday</h2>
            <h2>8:15am-9:15pm</h2>

            <h2>Thursday</h2>
            <h2>8:15am-4:30pm</h2>

            <h2>Friday</h2>
            <h2>8:15am-5:30pm</h2>

            <h2>Saturday</h2>
            <h2>Closed</h2>

            <h2>Sunday</h2>
            <h2>Closed</h2>
          </IonCardSubtitle>
        </IonCard>

        <IonImg src={image2} alt="Silhouette of mountains, grass, and man with a bike"></IonImg>

          <div className="socialLinks">
                <a href="https://en-gb.facebook.com/" target="_blank" className="img_logos">
                  <img src={Facebook_logo} alt="Facebook logo, blue and white"></img>
                </a>

                <a href="https://www.instagram.com/" target="_blank" className= "img_logos">
                  <img  src={Instagram_logo} alt="Instagram logo, pink and white"></img>
                </a>

                <a href="https://www.tripadvisor.co.uk/" target="_blank" className="img_logos">
                  <img  src={tripadvisor_logo} alt="TripAdvisor logo, bird with red and green eyes plus tripadvisor title"></img>
                </a>

                <a href="https://www.youtube.com/?gl=GB&hl=en-GB" target="_blank" className="img_logos">
                  <img  src={youtube_logo} alt="Youtube logo, black and red with youtube name in logo"></img>
                </a>
  
        </div>
      </IonContent>
    </IonPage>
  </>

);

export default contact;
