<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Профиль</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Профиль</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-avatar style="margin: 10px auto;">
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-avatar>
      <ion-title style="text-align: center; display:flex; align-items: center;">
        Username <a href="/tabs/tab3"><img src="/pencil.svg" style="width: 20px;" /></a>
      </ion-title>
      

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar  } from '@ionic/vue';

</script>
