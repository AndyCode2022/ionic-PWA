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
                    <IonImg src={product1} alt="black standard bike with large wheels"></IonImg>
                </IonCardHeader>
                    
                <IonCardContent>
                    £350
                </IonCardContent>
                <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>
        </IonCol>

          

        {/* </IonReactRouter> */}

    </>

);

export default productOne;