import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonImg, IonCol } from '@ionic/react';

import product7 from '../images/product7.jpg';

const productSeven = () => (

    <>

        <IonCol>

            <IonCard color="light">
                <IonCardHeader>
                    <IonCardTitle>Hades</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonImg src={product7} alt="black bike"></IonImg>
                    {/* <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" /> */}
                </IonCardHeader>

                <IonCardContent>
                    Card Content
                </IonCardContent>
                <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>

        </IonCol>

    </>

);

export default productSeven;