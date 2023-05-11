<template>
    <ion-page>
      <LoginForm/>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { ellipse, square, triangle } from 'ionicons/icons';
  import LoginForm from '@/components/LoginForm.vue';
  </script>
  