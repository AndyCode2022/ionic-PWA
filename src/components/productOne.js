import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonImg, IonTabs, IonRouterOutlet, Route, HomePage, IonButton } from '@ionic/react';

import product1 from '../images/product1.jpg';
// import careraMaster from "../pages/careraMaster";

const productOne = () => (

    <>
    
        <IonCol>
            <IonCard color="primary">
                <IonCardHeader>
                    <IonCardTitle>Kraken Vengence</IonCardTitle>
                    <IonCardSubtitle>Kraken power!</IonCardSubtitle>
                    <IonImg src={product1} alt="black bike"></IonImg>
                </IonCardHeader>
                    
                <IonCardContent>
                    <h2>test</h2>
                    Get this bike for power!
                </IonCardContent>
                <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>
        </IonCol>

          

        {/* </IonReactRouter> */}

    </>

);

export default productOne;