import React from 'react';
import { IonContent, IonMenu, IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton } from '@ionic/react';

const Menu = () => {


    return (
        <>
            <IonMenu contentId="main-content">

                {/* <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu Content</IonTitle>

                    </IonToolbar>
                </IonHeader> */}

                <IonContent className="ion-padding" >
                    <IonButton expand="full" fill="clear" href="/">Home</IonButton>
                    <IonButton expand="full" fill="clear" href="/products">Products</IonButton>
                    <IonButton expand="full" fill="clear" href="/contact">Contact</IonButton>
                    <IonButton expand="full" fill="clear" href="/bikeTrails">Bike Trails</IonButton>
                    <IonButton expand="full" fill="clear" href="/photoGallery">Photo Gallery</IonButton>

                </IonContent>


            </IonMenu>
        </>

    )
};

export default Menu;
