<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonCardHeader, IonButton, IonIcon, IonFab, IonFabButton, IonBadge } from '@ionic/vue';
import { RouterLink } from 'vue-router';
import router from '../router'
import { it } from 'node:test';


</script>

<script lang="ts">

export default {
  data() {
    return {
      itemsInBasket: 0,
      data: {
        item_1: {
          title: 'Название товара',
          description: 'Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара ',
          price: '$100',
          countInBasket: 0
        },
        item_2: {
          title: 'Название товара',
          description: 'Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара',
          price: '$200',
          countInBasket: 0
        },
        item_3: {
          title: 'Название товара',
          description: 'Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара',
          price: '$654312',
          countInBasket: 0
        }
      },
      components: { IonBadge }
    }
  }
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Главная</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-fab>

        <ion-badge color="success" style="position: absolute; right: 0; z-index: 222;">{{ itemsInBasket }}</ion-badge>
        <ion-fab-button>
          <img src="/icons8-корзина-50.png" alt="" style="width: 60%;" />
        </ion-fab-button>
      </ion-fab>
      <ion-title style="margin-top: 10px;">
        Товары недели:
      </ion-title>
      <ion-card color="success" v-for="item in data">
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <ion-card-header>
          <ion-card-title>
            {{ item.title }}
          </ion-card-title>
          <ion-card-subtitle>
            {{ item.price }}
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {{ item.description }}
        </ion-card-content>
        <ion-button fill="clear" style="height: auto ;">
          <b style="color: black; font-size: 18px;" v-if="item.countInBasket > 0">
            <a @click="itemsInBasket--, item.countInBasket--" style="font-size: 24px;">-</a> {{ item.countInBasket }} <a
              @click="itemsInBasket++, item.countInBasket++" style="font-size: 24px;">+</a>
          </b>
          <b alt="" v-else @click="itemsInBasket++, item.countInBasket++">В корзину</b>
        </ion-button>
        <router-link :to="{ name: 'ProductPage', params: { price: item.price } }">
          <ion-button fill="solid" color="dark">
            Подробнее
          </ion-button>
        </router-link>
      </ion-card>
    </ion-content>
  </ion-page>
</template>



<style>
ion-fab {
  position: fixed;
  bottom: 15px;
  right: 15px;
}

ion-fab-button::part(native) {
  background-color: #b7f399;
  border-radius: 15px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  color: black;
}
</style>