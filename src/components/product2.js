import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';

import product2 from '../images/product2.jpg';

const productTwo = () => (

    <>

        <IonCol>
            <IonCard color="secondary">
                <IonCardHeader>
                    <IonCardTitle>TREK SLASHER</IonCardTitle>
                    <IonCardSubtitle>Lightning fast, slik wheels</IonCardSubtitle>
                    <IonImg src={product2} alt="black bike"></IonImg>
                </IonCardHeader>

                <IonCardContent>
                    Card Content
                </IonCardContent>
                <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>
        </IonCol>

    </>

);

export default productTwo;