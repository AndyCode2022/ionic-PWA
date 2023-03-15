import React from 'react';
import logo from './images/logo.jpg';
import image2 from './images/image2.jpg';
import './App.css';
// import * as Notifications from 'expo-notifications';
import '@ionic/react/css/core.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { setupIonicReact, IonImg } from '@ionic/react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';

function App() {
  setupIonicReact();
  defineCustomElements(window);

  return (
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
              <img src={logo} className="App-logo" alt="logo" />
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            Tap the button in the toolbar to open the menu.
          </IonContent>
        </IonPage>

        <h1>Bike King Borders</h1>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ion-fab>
          <ion-fab-button>
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
        </a> */}
      </header>

      <IonImg src={image2} alt="bike image"></IonImg>

      <IonCard>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png"/>
        <IonCardHeader>
          <IonCardTitle>Carera Master</IonCardTitle>
          <IonCardSubtitle>Cost: £350</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Get the all new Kraken master bike!
        </IonCardContent>
        <ion-button fill="clear">Purchase</ion-button>
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
            </IonCard>

          </IonCol>

        </IonRow>
      </IonGrid>

      <footer>Bike King Borders</footer>
    </div >

    // Contact

    // Photo Gallery

    // Bike Trails

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
  // }

}

export default App;
