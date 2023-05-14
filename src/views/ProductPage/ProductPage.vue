<template>
  <ion-page>
    <ion-content>
      <ion-item>
        <ion-card style="text-align: center;">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <ion-card-header>
            <ion-card-title>
              Название товара
            </ion-card-title>
          </ion-card-header>
        </ion-card>
      </ion-item>
      <ion-item>
        <h1>
          Цена: {{ $route.params.price }}
        </h1>
      </ion-item>
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonTitle, IonPage, IonRouterOutlet, IonContent, IonCard, IonCardHeader, IonCardTitle, IonItem } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
defineProps({
  price: String,
});
</script>
  