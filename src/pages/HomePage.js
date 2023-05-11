import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenu, IonMenuButton, IonPage, IonImg, IonButton } from '@ionic/react';
// import image2 from '../images/image2.jpg';
// import image1 from '../images/bikeTrails1.jpg';
// import bikeTrails from "./pages/bikeTrails";
// import photoGallery from "./pages/photoGallery";
import bikeTrails1 from "../images/bikeTrails1.jpg";
// import bikeTrails2 from "../images/bikeTrails2.jpg";

import Card from '../components/card';



function Subscribe() {
  console.log("This is a test");
}

Notification.requestPermission().then((result) => {
  if (result === "granted") {
    // randomNotification();
    console.log("user wants notifications");
  }
});

// function showNotification() {
//   const notifTitle = "BikeKingBorders"
//   const notifBody = "We are having a half price sale!";
//   const notifImg = `${bikeTrails1}`;
//   const options = {
//     body: notifBody,
//     icon: notifImg,
//   };
//   new Notification(notifTitle, options);
// }


const HomePage = () => (
  <>
    <IonPage>
      <IonContent>

        <Card></Card>
        <Card></Card>
        <Card></Card>

        <IonButton onClick={Subscribe}>
          Subscribe to notifications
        </IonButton>
        <div className="App">
          <header className="App-header">
           <card></card>
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
                   <img src={logo} className="App-logo" alt="logo" /> 
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">

        

                <h1>Bike King Borders</h1>
              </IonContent>
            </IonPage>
            <IonImg src={image1} alt="bike image"></IonImg>
          </header>
        </div>
      </IonContent>
    </IonPage>
  </>
);

export default HomePage;