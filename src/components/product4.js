import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonPage, IonContent } from '@ionic/react';

import product4 from '../images/product4.jpg';

const productFour = () => (

    <>

        <IonCol>
            <IonCard color="success">
                <IonCardHeader>
                    <IonCardTitle>Voodini ark</IonCardTitle>
                    <IonCardSubtitle>For the bike enthusiasts</IonCardSubtitle>
                    <IonImg src={product4} alt="black bike"></IonImg>
                </IonCardHeader>

                <IonCardContent>
                    Card Content
                </IonCardContent>
                <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>
        </IonCol>

    </>

);

export default productFour;