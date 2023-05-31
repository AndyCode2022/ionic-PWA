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
                    <IonButton expand="full" fill="clear" href="/~14023216/react/">Home</IonButton>
                    <IonButton expand="full" fill="clear" href="/~14023216/react/products">Products</IonButton>
                    <IonButton expand="full" fill="clear" href="/~14023216/react/contact">Contact</IonButton>
                    <IonButton expand="full" fill="clear" href="/~14023216/react/bikeTrails">Bike Trails</IonButton>
                    <IonButton expand="full" fill="clear" href="/~14023216/react/photoGallery">Photo Gallery</IonButton>

                </IonContent>


            </IonMenu>
        </>

    )
};

export default Menu;
