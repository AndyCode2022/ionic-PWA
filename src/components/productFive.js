import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonImg, IonCol } from '@ionic/react';

import product5 from '../images/product5.jpg';

const productFive = () => (

    <>

        <IonCol>
            <IonCard color="warning">
                <IonCardHeader>
                    <IonCardTitle>Dynasty Raven</IonCardTitle>
                    <IonCardSubtitle>As fast as a raven</IonCardSubtitle>
                    <IonImg src={product5} alt="black bike"></IonImg>
                </IonCardHeader>

                <IonCardContent>
                    Card Content
                </IonCardContent>
                <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>
        </IonCol>

    </>

);

export default productFive;