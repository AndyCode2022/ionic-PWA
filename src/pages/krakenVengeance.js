import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonImg, IonTabs, IonRouterOutlet, IonButton } from '@ionic/react';

import mainProduct from '../images/mainProduct.jpg';


const krakenVengeance = () => (

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


            <IonCard color="primary">
                <IonCardHeader>
                    <IonCardTitle>Kraken Vengence</IonCardTitle>
                    <IonCardSubtitle>Kraken power!</IonCardSubtitle>
                    <IonImg src={mainProduct} alt="black bike"></IonImg>
                </IonCardHeader>

                <IonCardContent>
                    <h2>test</h2>
                    Get this bike for power!
                </IonCardContent>

                <IonTabs>
                    <IonRouterOutlet>
                        <ion-button href="/pages/krakenVengeance">Purchase</ion-button>
                    </IonRouterOutlet>
                </IonTabs>

            </IonCard>
            </IonContent>
            </IonPage>

    </>

);

export default krakenVengeance;