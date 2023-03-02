import React from 'react';
import logo from './images/logo.jpg';
import './App.css';
import '@ionic/react/css/core.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { setupIonicReact, IonImg } from '@ionic/react';
<<<<<<< HEAD
<<<<<<< HEAD
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
=======


function App() {
  setupIonicReact();
  defineCustomElements(window);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Bike King Borders</h1>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ion-fab>
          <ion-fab-button>
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
        </a> */}
      </header>

      <IonImg src={logo} alt="bike image"></IonImg>

      <IonCard>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <IonCardHeader>
          <IonCardTitle>Carera Master</IonCardTitle>
          <IonCardSubtitle>Cost: £350</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Get the all new carrera master bike!
        </IonCardContent>
        <ion-button fill="clear">Purchase</ion-button>
      </IonCard>


<<<<<<< HEAD
<<<<<<< HEAD
      <IonCard color="primary">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
=======
>>>>>>> 8a422116589499d87aa2d5296ef4fa4854e16c82
=======
>>>>>>> 8a422116589499d87aa2d5296ef4fa4854e16c82


      <IonGrid>
        <IonRow>

          <IonCol>


            <IonCard color="primary">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
            </IonCard>

          </IonCol>
          <IonCol>


            <IonCard color="secondary">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
            </IonCard>

          </IonCol>
          <IonCol>


            <IonCard color="tertiary">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
            </IonCard>

          </IonCol>


          <IonCol>


            <IonCard color="success">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
            </IonCard>
          </IonCol>

        </IonRow>
        <IonRow>


          <IonCol>


            <IonCard color="warning">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
            </IonCard>

          </IonCol>
          <IonCol>


            <IonCard color="danger">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
            </IonCard>

          </IonCol>
          <IonCol>


            <IonCard color="light">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
            </IonCard>

          </IonCol>
          <IonCol>


            <IonCard color="medium">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Card Content
              </IonCardContent>
            </IonCard>

          </IonCol>

        </IonRow>
      </IonGrid>

      // Nav tabs
      <ul class="nav nav-tabs" id="navId">
        <li class="nav-item">
          <a href="#tab1Id" class="nav-link active">Homepage</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#tab2Id">Action</a>
            <a class="dropdown-item" href="#tab3Id">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#tab4Id">Action</a>
          </div>
        </li>
        <li class="nav-item">
          <a href="#tab5Id" class="nav-link">Another link</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link disabled">Disabled</a>
        </li>
      </ul>

      // Tab panes
      <div class="tab-content">
        <div class="tab-pane fade show active" id="tab1Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab2Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab3Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab4Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab5Id" role="tabpanel"></div>
      </div>
    </div >
<<<<<<< HEAD


<<<<<<< HEAD

=======
>>>>>>> 8a422116589499d87aa2d5296ef4fa4854e16c82
=======


>>>>>>> 8a422116589499d87aa2d5296ef4fa4854e16c82
  );
}

export default App;
