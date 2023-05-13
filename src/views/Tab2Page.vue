<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Категории</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Категории</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-title style="margin-top: 10px;">
        Категории товаров:
      </ion-title>
      <ion-accordion-group style="margin-top: 10px;" v-for="cat in categories" :key="cat">
        <ion-accordion value="first" >
          <ion-item slot="header" color="light">
            <ion-label>{{cat}}</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content" v-for="subcat in categories">Подкатегория {{ categories.indexOf(subcat) + 1 }}</div>
        </ion-accordion>
      </ion-accordion-group>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

let categories = ['Футболки', 'Кофты', 'Рубашки', 'Поло', 'Носки', 'Штаны', 'Трусы', 'Шапки']
</script>
