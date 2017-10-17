import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';


if (environment.production) {
    enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule);
    // .then(() => registerServiceWorker());



export const applicationServerPublicKey = 'BLREzeCVF-WmRxCA25xqcuSpY0jpRwCB5VYEmfLnEPeELWvpV8K24zJn5pCYQdhaRM0FljymcnyuZ9r7yBF2xtA';
// Private Key:
//     3_5h06dAIfY3r4OhX0XxKi8Oh9NZxCB7q6X9qpmdb2s
export const pushButton = document.querySelector('.js-push-btn');

export let isSubscribed: boolean = false;
export let swRegistration: any = null;

export function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export function updateBtn() {
    if (isSubscribed) {
        pushButton.textContent = 'Disable Push Messaging';
    } else {
        pushButton.textContent = 'Enable Push Messaging';
    }
    pushButton.setAttribute('disabled', 'disabled');
}

export function subscribeUser() {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
        .then(function(subscription) {
            console.log('User is subscribed.');
            isSubscribed = true;
            updateBtn();
        })
        .catch(function(err) {
            console.log('Failed to subscribe the user: ', err);
            updateBtn();
        });
}

export function unsubscribeUser() {
    swRegistration.pushManager.getSubscription()
        .then(function(subscription) {
            if (subscription) {
                return subscription.unsubscribe();
            }
        })
        .catch(function(error) {
            console.log('Error unsubscribing', error);
        })
        .then(function() {
            console.log('User is unsubscribed.');
            isSubscribed = false;
            updateBtn();
        });
}

export function initialiseUI() {
    pushButton.addEventListener('click', function() {
        pushButton.removeAttribute('disabled');
        if (isSubscribed) {
            unsubscribeUser();
        } else {
            subscribeUser();
        }
    });
    // Set the initial subscription value
    swRegistration.pushManager.getSubscription()
        .then(function(subscription) {
            isSubscribed = !(subscription === null);
            if (isSubscribed) {
                console.log('User IS subscribed.');
            } else {
                console.log('User is NOT subscribed.');
            }
            updateBtn();
        });
}


function registerServiceWorker() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.register('service-worker.js')
            .then(function (swReg) {
                swRegistration = swReg;
                initialiseUI();
                console.log(swRegistration);
            })
            .catch(function (error) {
                console.error('Service Worker Error', error);
            });
    } else {
        console.warn('Push messaging is not supported');
    }
}

// ng serve --ssl 1 --ssl-key "ssl/local.brianflove.com.key" --ssl-cert "ssl/local.brianflove.com.crt"
