import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenu, IonMenuButton, IonPage, IonImg } from '@ionic/react';
import image2 from '../images/image2.jpg';
import image1 from '../images/bikeTrails1.jpg';


const HomePage = () => (
  <>
  <div className="App">
  <header className="App-header">

  <IonMenu contentId="main-content">

        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">This is the menu content.</IonContent>
        <a href="index.html">Home</a>
        <a href="products.html">Products</a>
        <a href="contact.html">Contact</a>
        <a href="photoGallery.html">Photo Gallery</a>
        <a href="mapTrails.html">Map Trails</a>
        
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

          <h1>Bike King Borders</h1>
        </IonContent>
      </IonPage>   
         <IonImg src={image1} alt="bike image"></IonImg>

</header>
</div>
</>
  );

  export default HomePage;