import React from 'react';
import { IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonPage, IonContent } from '@ionic/react';
// import image1 from '../images/bikeTrails1.jpg';
// import image2 from '../images/image2.jpg';

import mainProduct from '../images/mainProduct.jpg';

// import product1 from '../images/product1.jpg';
// import product2 from '../images/product2.jpg';
// import product3 from '../images/product3.jpg';
// import product4 from '../images/product4.jpg';
// import product5 from '../images/product5.jpg';
// import product6 from '../images/product6.jpg';


import Card from '../components/card';
// Components

// import productOne from '../components/productOne.js';
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


                    <Card></Card>
                        {/* <ProductOne></ProductOne> */}
                        {/* <ProductTwo></ProductTwo> */}
                        {/* <ProductThree></ProductThree> */}

                  
                  {/*

                        <IonCol>
                            <IonCard color="secondary">
                                <IonCardHeader>
                                    <IonCardTitle>TREK SLASHER</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <IonImg src={product2} alt="green and white bike"></IonImg>
                                </IonCardHeader>

                                <IonCardContent>
                                    Card Content
                                </IonCardContent>
                                <ion-button href="/components/product">Purchase</ion-button>       </IonCard>
                        </IonCol>

                        <IonCol>
                            <IonCard color="tertiary">
                                <IonCardHeader>
                                    <IonCardTitle>Turbo Swift</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <IonImg src={product3} alt="black bike"></IonImg>
                                </IonCardHeader>

                                <IonCardContent>
                                    Card Content
                                </IonCardContent>
                                <ion-button href="/components/product">Purchase</ion-button>
                            </IonCard>
                        </IonCol>

                        <IonCol>
                            <IonCard color="success">
                                <IonCardHeader>
                                    <IonCardTitle>Voodini ark</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <IonImg src={product4} alt="green and white bike"></IonImg>
                                </IonCardHeader>

                                <IonCardContent>
                                    Card Content
                                </IonCardContent>
                                <ion-button href="/components/product">Purchase</ion-button>
                            </IonCard>
                        </IonCol>
                 </IonRow>

                    <IonRow>

                        <IonCol>
                            <IonCard color="warning">
                                <IonCardHeader>
                                    <IonCardTitle>Dynasty raven</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <IonImg src={product5} alt="black bike"></IonImg>
                                </IonCardHeader>

                                <IonCardContent>
                                    Card Content
                                </IonCardContent>
                                <ion-button href="/components/product">Purchase</ion-button>
                            </IonCard>
                        </IonCol>

                        <IonCol>
                            <IonCard color="danger">
                                <IonCardHeader>
                                    <IonCardTitle>Thor Light</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <IonImg src={product6} alt="white bike"></IonImg>
                                </IonCardHeader>

                                <IonCardContent>
                                    Card Content
                                </IonCardContent>
                                <ion-button href="/components/product">Purchase</ion-button>
                            </IonCard>
                        </IonCol> */}
                        
                        {/* <IonCol>

       <IonCard color="light">
         <IonCardHeader>
           <IonCardTitle>Hades</IonCardTitle>
           <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
           <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
         </IonCardHeader>

         <IonCardContent>
           Card Content
         </IonCardContent>
         <ion-button href="/components/product">Purchase</ion-button>
       </IonCard>

     </IonCol> */}
                        {/* <IonCol>

       <IonCard color="medium">
         <IonCardHeader>
           <IonCardTitle>Joker Supreme</IonCardTitle>
           <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
           <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        </IonCardHeader>

         <IonCardContent>
           Card Content
         </IonCardContent>
         <ion-button href="/components/product">Purchase</ion-button>
       </IonCard>

     </IonCol> */}

                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    </>

);

export default product;