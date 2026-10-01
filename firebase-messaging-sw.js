importScripts("https://www.gstatic.com/firebasejs/12.4.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.4.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCrRzSomSPngvYviAjB8DdOSsw9ez0FVEg",
  authDomain: "telestgramdm.firebaseapp.com",
  projectId: "telestgramdm",
  storageBucket: "telestgramdm.firebasestorage.app",
  messagingSenderId: "705244166001",
  appId: "1:705244166001:web:1ca61eb8c3da30fb8528d0"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification?.title || "TelestgramDM",
    { body: payload.notification?.body || "新しいメッセージがあります" }
  );
});
