import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonImg, IonCol } from '@ionic/react';

import product6 from '../images/product6.jpg';

const productSix = () => (

    <>

        <IonCol>
            <IonCard color="danger">
                <IonCardHeader>
                    <IonCardTitle>Thor Light</IonCardTitle>
                    <IonCardSubtitle>Be like the god of thunder</IonCardSubtitle>
                    <IonImg src={product6} alt="Lady on a white bike travelling through the fields beside a fence."></IonImg>
                </IonCardHeader>

                <IonCardContent>
                    £600
                </IonCardContent>
                <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>
        </IonCol>

    </>

);

export default productSix;