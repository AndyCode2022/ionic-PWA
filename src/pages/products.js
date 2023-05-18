import React from 'react';
import { IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonPage, IonContent } from '@ionic/react';
// import image1 from '../images/bikeTrails1.jpg';
// import image2 from '../images/image2.jpg';

import mainProduct from '../images/mainProduct.jpg';







// import Card from '../components/card';
// Components

import ProductOne from '../components/productOne.js';
// import productTwo from '../components/productTwo.js';
// import productThree from '../components/productThree.js';
// import productFour from '../components/productFour.js';
// import productFive from '../components/productFive.js';
// import productSix from '../components/productSix.js';


const product = () => (

    <>
        <IonPage>
            <IonContent>

                {/* Products page */}
               <h1>Bike King Borders</h1>

                {/* Change the images to ion img */}
                <IonCard>
                    <IonImg src={mainProduct} alt="Black Bike"></IonImg>
                    <IonCardHeader>
                        <IonCardTitle>Carera Master</IonCardTitle>
                        <IonCardSubtitle>Cost: £350</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Get the all new Kraken master bike!
                    </IonCardContent>
                    <ion-button href="/components/product.js">Purchase</ion-button>
                </IonCard>


                <h1>Bike King Borders</h1>
                <IonGrid>
                    <IonRow>

                    {/* <Card></Card> */}
                        <ProductOne></ProductOne>
                        {/* <ProductTwo></ProductTwo> */}
                        {/* <ProductThree></ProductThree> */}

                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    </>

);

export default product;