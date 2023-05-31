import React from "react";

// bike trail images

import "./App.css";
// import * as Notifications from 'expo-notifications';
import "@ionic/react/css/core.css";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { setupIonicReact } from "@ionic/react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";

// import { useState, useEffect, AsyncStorage } from "react";
import HomePage from "./pages/HomePage";
import Products from "./pages/products";
import Contact from "./pages/contact";
import PhotoGallery from "./pages/photoGallery";
import BikeTrails from "./pages/bikeTrails";

import { IonReactRouter } from "@ionic/react-router";

import { Route } from "react-router";

import { homeOutline, bag, chatboxEllipses, imagesOutline, trailSign } from "ionicons/icons";

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
            <Route path="/~14023216/react/" render={() => <HomePage />} exact={true} />
            <Route path="/~14023216/react/products" render={() => <Products />} exact={true} />
            <Route path="/~14023216/react/contact" render={() => <Contact />} exact={true} />
            <Route path="/~14023216/react/bikeTrails" render={() => <BikeTrails />} exact={true} />
            <Route path="/~14023216/react/photoGallery" render={() => <PhotoGallery />} exact={true} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/~14023216/react/">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="products" href="/~14023216/react/products">
              <IonIcon icon={bag} />
              <IonLabel>Products</IonLabel>
            </IonTabButton>

            <IonTabButton tab="contact" href="/~14023216/react/contact">
              <IonIcon icon={chatboxEllipses} />
              <IonLabel>Contact</IonLabel>
            </IonTabButton>

            <IonTabButton tab="bikeTrails" href="/~14023216/react/bikeTrails">
              <IonIcon icon={imagesOutline} />
              <IonLabel>Photo Gallery</IonLabel>
            </IonTabButton>

            <IonTabButton tab="photoGallery" href="/~14023216/react/photoGallery">
              <IonIcon icon={trailSign} />
              <IonLabel>Bike Trails</IonLabel>
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
