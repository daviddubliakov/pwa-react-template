const swDev = () => {
  const swUrl = `${process.env.PUBLIC_URL}/sw.js`;

  navigator.serviceWorker.register(swUrl)
    .then((res) => console.warn("Response:\n", res));
}

export default swDev;
