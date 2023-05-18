import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';

import product8 from '../images/product8.jpg';

const productEight = () => (

    <>

        <IonCol>

            <IonCard color="medium">
                <IonCardHeader>
                    <IonCardTitle>Joker Supreme</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
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