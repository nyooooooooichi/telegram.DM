importScripts("https://www.gstatic.com/firebasejs/12.4.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.4.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey:"AIzaSyCrRzSomSPngvYviAjB8DdOSsw9ez0FVEg",
  authDomain:"telestgramdm.firebaseapp.com",
  projectId:"telestgramdm",
  storageBucket:"telestgramdm.firebasestorage.app",
  messagingSenderId:"705244166001",
  appId:"1:705244166001:web:1ca61eb8c3da30fb8528d0"
});
try { firebase.messaging(); } catch(e) {}

const CACHE="telestgramdm-mark7-v1";
const STATIC=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  const u=new URL(event.request.url);
  if(u.origin!==self.location.origin)return;
  if(u.pathname.endsWith("/")||u.pathname.endsWith("/index.html")){
    event.respondWith(fetch(event.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(event.request,c));return r}).catch(()=>caches.match(event.request)));
  } else {
    event.respondWith(caches.match(event.request).then(r=>r||fetch(event.request)));
  }
});
