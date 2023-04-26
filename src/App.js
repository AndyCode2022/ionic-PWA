import React from 'react';
import logo from './images/logo.jpg';
import image2 from './images/image2.jpg';
// social media logos
import Facebook_logo from './images/Facebook_logo.png';
import Instagram_logo from './images/Instagram_logo.png';
import tripadvisor_logo from './images/tripadvisor_logo.png';
import youtube_logo from './images/youtube_logo.png';
// bike trail images
import bikeTrails1 from './images/bikeTrails1.jpg';
import bikeTrails2 from './images/bikeTrails2.jpg';
import './App.css';
// import { product } from './product.js';
// import * as Notifications from 'expo-notifications';
import '@ionic/react/css/core.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { setupIonicReact, IonImg } from '@ionic/react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
// import { useState, useEffect, AsyncStorage } from "react";


function App() {
  setupIonicReact();
  defineCustomElements(window);
  return (
    <div className="App">
      <header className="App-header">
        {/* Homepage */}
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
            Tap the button in the toolbar to open the menu.
          </IonContent>
        </IonPage>

        <h1>Bike King Borders</h1>
      </header>

      <IonImg src={image2} alt="bike image"></IonImg>

      {/* Products page */}

      <IonCard>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png"/>
        <IonCardHeader>
          <IonCardTitle>Carera Master</IonCardTitle>
          <IonCardSubtitle>Cost: £350</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Get the all new Kraken master bike!
        </IonCardContent>
        <ion-button href="/components/product.js">Purchase</ion-button>
      </IonCard>

      <IonGrid>

        <IonRow>

          <IonCol>

            <IonCard color="primary">
              <IonCardHeader>
                <IonCardTitle>Kraken Vengence</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png"/>
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
              <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>

          </IonCol>
          <IonCol>

            <IonCard color="secondary">
              <IonCardHeader>
                <IonCardTitle>TREK SLASHER</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
              <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>

          </IonCol>
          <IonCol>

            <IonCard color="tertiary">
              <IonCardHeader>
                <IonCardTitle>Turbo Swift</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
              <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>

          </IonCol>

          <IonCol>

            <IonCard color="success">
              <IonCardHeader>
                <IonCardTitle>Voodini ark</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
              <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>
          </IonCol>

        </IonRow>
        <IonRow>

          <IonCol>

            <IonCard color="warning">
              <IonCardHeader>
                <IonCardTitle>Dynasty raven</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
              <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>

          </IonCol>
          <IonCol>

            <IonCard color="danger">
              <IonCardHeader>
                <IonCardTitle>Thor Light</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
              <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>

          </IonCol>
          <IonCol>

            <IonCard color="light">
              <IonCardHeader>
                <IonCardTitle>Hades</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
              <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>

          </IonCol>
          <IonCol>

            <IonCard color="medium">
              <IonCardHeader>
                <IonCardTitle>Joker Supreme</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
              <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>

          </IonCol>

        </IonRow>
      </IonGrid>

      
      {/* Contact */}

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
      <IonImg class ="img_logos" src={Facebook_logo} alt="Facebook logo"></IonImg>
      <IonImg class ="img_logos" src={Instagram_logo} alt="Instagram logo"></IonImg>
      <IonImg class ="img_logos" src={tripadvisor_logo} alt="TripAdvisor logo"></IonImg>
      <IonImg class ="img_logos" src={youtube_logo} alt="Youtube logo"></IonImg>
      </ion-row>
    </ion-grid>

      {/* Bike Trails */}


      <IonImg src={bikeTrails1} alt="bikeTrail"></IonImg>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>

      <IonImg src={bikeTrails2} alt="bikeTrail"></IonImg>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>

      {/* Photo Gallery */}

      map/location

      text


      <footer>Bike King Borders</footer>
      </div >

  );

  // // Push Notifications
  // async function registerForPushNotificationsAsync() {
  //   let token;

  //   const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //   let finalStatus = existingStatus;

  //   if (existingStatus !== 'granted') {
  //     const { status } = await Notifications.requestPermissionsAsync();
  //     finalStatus = status;
  //   }
  //   if (finalStatus !== 'granted') {
  //     alert('Failed to get push token for push notification!');
  //     return;
  //   }
  //   token = (await Notifications.getExpoPushTokenAsync()).data;
  //   console.log(token);

  //   return token;
  }

export default App;
