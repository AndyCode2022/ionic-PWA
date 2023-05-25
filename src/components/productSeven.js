import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonImg, IonCol } from '@ionic/react';

import product7 from '../images/product7.jpg';

const productSeven = () => (

    <>

        <IonCol>

            <IonCard color="light">
                <IonCardHeader>
                    <IonCardTitle>Hades</IonCardTitle>
                    <IonCardSubtitle>As hot as the volcano</IonCardSubtitle>
                    <IonImg src={product7} alt="black bike"></IonImg>
                </IonCardHeader>

                <IonCardContent>
                    Has the power of hades
                </IonCardContent>
                <ion-button href="/components/product">Purchase</ion-button>
            </IonCard>

        </IonCol>

    </>

);

export default productSeven;