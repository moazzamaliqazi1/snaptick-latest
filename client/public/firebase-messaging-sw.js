// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyC8JYUdG6sWvxFy__AZOSRNj-fC8caoExM",
    authDomain: "medica-487ff.firebaseapp.com",
    projectId: "medica-487ff",
    storageBucket: "medica-487ff.appspot.com",
    messagingSenderId: "992085187551",
    appId: "1:992085187551:web:9df8b23414e48da9dc426a"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});