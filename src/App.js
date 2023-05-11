import React from "react";
import logo from "./images/logo.jpg";
import image2 from "./images/image2.jpg";

// bike trail images

import "./App.css";
// import * as Notifications from 'expo-notifications';
import "@ionic/react/css/core.css";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { setupIonicReact, IonImg, IonCardSubtitle } from "@ionic/react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonButton,
} from "@ionic/react";

// import { useState, useEffect, AsyncStorage } from "react";
import HomePage from "./pages/HomePage";
import Products from "./pages/products";
import Contact from "./pages/contact";
// import photoGallery from "./pages/photoGallery";
// import bikeTrails from "./pages/bikeTrails";

import { IonReactRouter } from "@ionic/react-router";

import { withRouter } from "react-router-dom";

// ion router might not work on college pc. Might need to install again.

import { Route, Redirect } from "react-router";

import { playCircle, radio, contact, addSharp } from "ionicons/icons";

function App() {
  setupIonicReact();
  defineCustomElements(window);
  return (
    <>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* <Redirect exact path="/" to="/home" /> */}
            {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
            <Route path="/home" render={() => <HomePage />} exact={true} />
            <Route path="/products" render={() => <Products />} exact={true} />
            <Route path="/contact" render={() => <Contact />} exact={true} />
            <Route
              path="/bikeTrails"
              render={() => <bikeTrails />}
              exact={true}
            />
            <Route
              path="/photoGallery"
              render={() => <photoGallery />}
              exact={true}
            />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={playCircle} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="products" href="/products">
              <IonIcon icon={radio} />
              <IonLabel>Products</IonLabel>
            </IonTabButton>

            <IonTabButton tab="contact" href="/contact">
              <IonIcon icon={addSharp} />
              <IonLabel>Contact</IonLabel>
            </IonTabButton>

            <IonTabButton tab="bikeTrails" href="/bikeTrails">
              <IonIcon icon={radio} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>

            <IonTabButton tab="photoGallery" href="/photoGallery">
              <IonIcon icon={radio} />
              <IonLabel>photoGallery</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>

      {/* <HomePage></HomePage>
      <Products></Products>
      <Contact></Contact>
      <bikeTrails></bikeTrails>
      <photoGallery></photoGallery> */}

      {/* <IonCard>
        <IonCardHeader>
          <IonCardTitle></IonCardTitle>
          <IonCardSubtitle></IonCardSubtitle>
        </IonCardHeader>
      </IonCard> */}
    </>
  );
}

export default App;

// References
// https://ionicframework.com/docs/components

// {/* End of content and displayed footer */}

//   <footer>Bike King Borders</footer>
// </div >

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
