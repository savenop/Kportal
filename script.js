if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => console.log("Service Worker registered"));
}

function main() {
  window.location.href = "./TT/mon.html";
}