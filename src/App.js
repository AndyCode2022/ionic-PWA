import React from "react";
import logo from "./images/logo.jpg";
import image2 from "./images/image2.jpg";

// bike trail images

import "./App.css";
// import * as Notifications from 'expo-notifications';
import "@ionic/react/css/core.css";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { setupIonicReact, IonImg, IonCardSubtitle, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
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
import PhotoGallery from "./pages/photoGallery";
import BikeTrails from "./pages/bikeTrails";

import { IonReactRouter } from "@ionic/react-router";

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
            <Route path="/" render={() => <HomePage />} exact={true} />
            <Route path="/products" render={() => <Products />} exact={true} />
            <Route path="/contact" render={() => <Contact />} exact={true} />
            <Route path="/bikeTrails" render={() => <BikeTrails />} exact={true} />
            <Route path="/photoGallery" render={() => <PhotoGallery />} exact={true} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/">
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
              <IonLabel>Bike Trails</IonLabel>
            </IonTabButton>

            <IonTabButton tab="photoGallery" href="/photoGallery">
              <IonIcon icon={radio} />
              <IonLabel>Photo Gallery</IonLabel>
            </IonTabButton>
          </IonTabBar>

        </IonTabs>

      </IonReactRouter>

    </>
  );
}

export default App;

// References
// https://ionicframework.com/docs/components
