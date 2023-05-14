<template>
    <ion-page>
        <ion-content>

            <ion-list v-for="item in catProds" style="margin-top: 30px; width: 95%; margin: 0 auto;">
                <router-link :to="{name:'Tabs'}" style="text-decoration: none; color: black;">

                    <ion-label style="display: flex; align-items: center;">
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                            style="width: 60px;" />
                        <label style="white-space: nowrap;">{{ item.title }}</label>
                        <ion-card-content>{{ item.desc + item.desc + item.desc }}</ion-card-content>
                    </ion-label>
                    <ion-card-subtitle style="width: 100%; text-align: end;">${{ item.price }}</ion-card-subtitle>
                    <hr style="color: black; border-width: 1px; box-sizing: border-box;">
                </router-link>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
    
<script setup lang="ts">
import { IonPage, IonList, IonCardSubtitle, IonCardContent, IonContent, IonLabel } from '@ionic/vue';
import { RouterLink } from 'vue-router';
import { ellipse, square, triangle } from 'ionicons/icons';
let catProds = {
    item1: {
        title: 'Товар 1',
        desc: 'Краткое описание товара',
        price: 150
    },
    item2: {
        title: 'Товар 2',
        desc: 'Краткое описание товара',
        price: 2161
    },
    item3: {
        title: 'Товар 3',
        desc: 'Краткое описание товара',
        price: 654
    },
    item4: {
        title: 'Товар 4',
        desc: 'Краткое описание товара',
        price: 99518
    },
    item5: {
        title: 'Товар 5',
        desc: 'Краткое описание товара',
        price: 5252
    },
    item6: {
        title: 'Товар 7',
        desc: 'Краткое описание товара',
        price: 12345
    },
    item7: {
        title: 'Товар 8',
        desc: 'Краткое описание товара',
        price: 54321
    },
    item8: {
        title: 'Товар 9',
        desc: 'Краткое описание товара',
        price: 303030
    },
}
</script>
    