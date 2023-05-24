import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonImg, IonCol } from '@ionic/react';

import product8 from '../images/product8.jpg';

const productEight = () => (

    <>

        <IonCol>

            <IonCard color="medium">
                <IonCardHeader>
                    <IonCardTitle>Joker Supreme</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonImg src={product8} alt="black bike"></IonImg>
                </IonCardHeader>

                <IonCardContent>
                    Card Content
                </IonCardContent>
                <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>

        </IonCol>

    </>

);

export default productEight;