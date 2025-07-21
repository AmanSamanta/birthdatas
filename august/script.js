function sendWish() {
  const name = document.getElementById("wisherName").value.trim();
  const message = document.getElementById("wishMessage");
  const box = document.getElementById("wishBox");
  const wishList =document.getElementById("wishList")

  if (name === "") {
    alert("Please enter your name to send a wish!");
    return;
  }

  message.textContent = `🎂 Thank you, ${name}! Your birthday wish is received! 🎉`;
  box.classList.remove("hidden");


showNotification('${name}just sent a birthday wish');

 const li=document.createElement("li");
 li.textContent=`${name} just sent a birthday wish`;
 wishList.appendChild(li);

 document.getElementById("wisherName").value ="";
}

function showNotification(text){
    const notification =document.createElement("div");
    notification.className = "toast";
    notification.textContent = text;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
    }, 3000);

    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => notification.remove(),5000);
        }, 9000);
  
}