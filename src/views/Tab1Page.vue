<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Главная</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-title style="margin-top: 10px;">
        Товары недели:
      </ion-title>
      <ion-card color="success">
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <ion-card-header>
          <ion-card-title>
            Название товара
          </ion-card-title>
          <ion-card-subtitle>
            $$$
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione hic alias dolor, voluptatum qui quia.
        </ion-card-content>
        <ion-button fill="clear" style="height: auto ;"><img src="/icons8-корзина-50.png" alt="" style="width: 60%;"></ion-button>
        <ion-button fill="solid" color="dark">Подробнее</ion-button>
      </ion-card>
      <ion-card color="warning">
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <ion-card-header>
          <ion-card-title>
            Название товара
          </ion-card-title>
          <ion-card-subtitle>
            $$$
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione hic alias dolor, voluptatum qui quia.
        </ion-card-content>
        <ion-button fill="clear" style="height: auto ;"><img src="/icons8-корзина-50.png" alt="" style="width: 60%;"></ion-button>
        <ion-button fill="solid" color="dark">Подробнее</ion-button>
      </ion-card>
      <ion-card color="danger">
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <ion-card-header>
          <ion-card-title>
            Название товара
          </ion-card-title>
          <ion-card-subtitle>
            $$$
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione hic alias dolor, voluptatum qui quia.
        </ion-card-content>
        <ion-button fill="clear" style="height: auto ;"><img src="/icons8-корзина-50.png" alt="" style="width: 60%;"></ion-button>
        <ion-button fill="solid" color="dark">Подробнее</ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonCardHeader, IonButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
