import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonImg, IonCol } from '@ionic/react';

import product8 from '../images/product8.jpg';

const productEight = () => (

    <>

        <IonCol>

            <IonCard color="medium">
                <IonCardHeader>
                    <IonCardTitle>Joker Supreme</IonCardTitle>
                    <IonCardSubtitle>For the Jokers</IonCardSubtitle>
                    <IonImg src={product8} alt="Green and white bike lying against a wall outside."></IonImg>
                </IonCardHeader>

                <IonCardContent>
                    £400
                </IonCardContent>
                <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>

        </IonCol>

    </>

);

export default productEight;