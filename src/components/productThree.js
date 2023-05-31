import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonImg, IonCol } from '@ionic/react';

import product3 from '../images/product3.jpg';

const productThree = () => (

    <>

        <IonCol>
            <IonCard color="tertiary">
                <IonCardHeader>
                    <IonCardTitle>Turbo Swift</IonCardTitle>
                    <IonCardSubtitle>For quick journeys</IonCardSubtitle>
                    <IonImg src={product3} alt="Black and white bike."></IonImg>
                </IonCardHeader>

                <IonCardContent>
                    £200
                </IonCardContent>
                <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>
        </IonCol>

    </>

);

export default productThree;