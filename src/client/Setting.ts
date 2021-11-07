export let ServerUrl: string = "";

export function initServerUrl() {
    const hostname = window.location.hostname;
    if (hostname === "localhost") {
      ServerUrl = `http://${hostname}:8000`;
    }
  }
