const btn = document.querySelector(".btn");
btn.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
      }),
    });
    if (res.ok) {
      const { url } = await res.json();
      window.location = url;
    } else {
      const json = await res.json();
      return Promise.reject(json);
    }
  } catch (e) {
    console.log(e);
  }
});
