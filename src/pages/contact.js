import React from 'react';
import { IonImg } from '@ionic/react';
// social media logos
import Facebook_logo from '../images/Facebook_logo.png';
import Instagram_logo from '../images/Instagram_logo.png';
import tripadvisor_logo from '../images/tripadvisor_logo.png';
import youtube_logo from '../images/youtube_logo.png';
import image2 from '../images/image2.jpg';

{/* Contact */}

const contact = () => (

<>
<h1>Contact Us Here</h1>

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

<IonImg src={image2} alt="Silhouette of mountains"></IonImg>

<ion-grid>
  <ion-row>
    <IonImg class="img_logos" src={Facebook_logo} alt="Facebook logo"></IonImg>
    <IonImg class="img_logos" src={Instagram_logo} alt="Instagram logo"></IonImg>
    <IonImg class="img_logos" src={tripadvisor_logo} alt="TripAdvisor logo"></IonImg>
    <IonImg class="img_logos" src={youtube_logo} alt="Youtube logo"></IonImg>
  </ion-row>
</ion-grid>
</>
);

export default contact;
