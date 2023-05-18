import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';

import product6 from '../images/product6.jpg';

const productSix = () => (

    <>

        <IonCol>
            <IonCard color="danger">
                <IonCardHeader>
                    <IonCardTitle>Thor Light</IonCardTitle>
                    <IonCardSubtitle>Be like the god of thunder</IonCardSubtitle>
                    <IonImg src={product6} alt="black bike"></IonImg>
                </IonCardHeader>

                <IonCardContent>
                    Card Content
                </IonCardContent>
                <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>
        </IonCol>

    </>

);

export default productSix;