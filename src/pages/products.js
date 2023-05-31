import React from 'react';
import { IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';

import mainProduct from '../images/mainProduct.jpg';
import Menu from '../components/menu';

// Components

import ProductOne from '../components/productOne.js';
import ProductTwo from '../components/productTwo.js';
import ProductThree from '../components/productThree.js';
import ProductFour from '../components/productFour.js';
import ProductFive from '../components/productFive.js';
import ProductSix from '../components/productSix.js';
import ProductSeven from '../components/productSeven';
import ProductEight from '../components/productEight.js';


const product = () => (

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
                    <IonImg src={mainProduct} alt="Black Bike in air with man on it doing a stunt."></IonImg>
                    <IonCardHeader>
                        <IonCardTitle>Carera Master</IonCardTitle>
                        <IonCardSubtitle>Cost: £350</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Get the all new Kraken master bike!
                    </IonCardContent>
                    <ion-button href="/pages/krakenVengeance">Purchase</ion-button>
                </IonCard>

                <h1>Bike King Borders</h1>
                <IonGrid>
                    <IonRow>

                        <ProductOne></ProductOne>
                        <ProductTwo></ProductTwo>
                        <ProductThree></ProductThree>
                        <ProductFour></ProductFour>
                        <ProductFive></ProductFive>
                        <ProductSix></ProductSix>
                        <ProductSeven></ProductSeven>
                        <ProductEight></ProductEight>

                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    </>

);

export default product;