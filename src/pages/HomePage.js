import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenu, IonMenuButton, IonPage, IonImg, IonButton } from '@ionic/react';
// import image2 from '../images/image2.jpg';
import image1 from '../images/bikeTrails1.jpg';
import logo from '../images/logo.jpg';
// import bikeTrails from "./pages/bikeTrails";
// import photoGallery from "./pages/photoGallery";
// import bikeTrails1 from "../images/bikeTrails1.jpg";
// import bikeTrails2 from "../images/bikeTrails2.jpg";

import Menu from '../components/menu';
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

        <IonButton onClick={Subscribe}>
          Subscribe to notifications
        </IonButton>

        <div className="App">
          <header className="App-header">

            <h1>Bike King Borders</h1>

            <IonImg src={image1} alt="bike image"></IonImg>
          </header>
        </div>
      </IonContent>



    </IonPage>
  </>
);

export default HomePage;