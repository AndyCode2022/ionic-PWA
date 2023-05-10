import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';

const productSix = () => (

    <>

        <IonCol>
            <IonCard color="primary">
                <IonCardHeader>
                    <IonCardTitle>Kraken Vengence</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonImg src={product1} alt="black bike"></IonImg>
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