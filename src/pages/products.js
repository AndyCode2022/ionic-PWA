import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonPage, IonContent } from '@ionic/react';
import image1 from '../images/bikeTrails1.jpg';
import image2 from '../images/image2.jpg';

const product = () => (

    <>
        <IonPage>
            <IonContent>

                {/* Products page */}
                <h1>Bike King Borders</h1>


                <IonCard>
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
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

                        <IonCol>

                            <IonCard color="primary">
                                <IonCardHeader>
                                    <IonCardTitle>Kraken Vengence</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <img alt="Silhouette of mountains" src="src/images/product1.jpg" />
                                </IonCardHeader>

                                <IonCardContent>
                                    Card Content
                                </IonCardContent>
                                <ion-button href="/components/product">Purchase</ion-button>
                            </IonCard>

                        </IonCol>
                        <IonCol>
                            <IonCard color="secondary">
                                <IonCardHeader>
                                    <IonCardTitle>TREK SLASHER</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <img alt="Silhouette of mountains" src="src/images/product2.jpg" />
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
                                    <img alt="Silhouette of mountains" src="src/images/product3.jpg" />
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
                                    <img alt="Silhouette of mountains" src="src/images/product4.jpg" />
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
                                    <img alt="Silhouette of mountains" src="src/images/product5.jpg" />
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
                                    <img alt="Silhouette of mountains" src="src/images/product6.jpg" />
                                </IonCardHeader>

                                <IonCardContent>
                                    Card Content
                                </IonCardContent>
                                <ion-button href="/components/product">Purchase</ion-button>
                            </IonCard>

                        </IonCol>
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