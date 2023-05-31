import React from 'react';
import { IonCard, IonCardHeader, IonPage, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/react';

import mainProduct from '../images/mainProduct.jpg';

import Menu from '../components/menu';
// import careraMaster from "./pages/careraMaster";

const careraMaster = () => (

    <>

        <Menu></Menu>
        <IonPage id="main-content">

            <IonCard>
                <IonImg src={mainProduct} alt="Black Bike"></IonImg>
                <IonCardHeader>
                    <IonCardTitle>Carera Master</IonCardTitle>
                    <IonCardSubtitle>Cost: £350</IonCardSubtitle>
                </IonCardHeader>
            </IonCard>

        </IonPage>

    </>

);

export default careraMaster;