function changeImage() {

    if (document.getElementById("Imagem").src === "https://i.postimg.cc/KjK1wL3c/bulb-off.png") 
    {
      document.getElementById("Imagem").src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
      document.getElementById("Botão").innerHTML = "Desligar";
      document.getElementById("Bod").classList.remove("Desligar");
      document.getElementById("Bod").classList.add("Ligar");
    }

    else if(document.getElementById("Imagem").src === "https://i.postimg.cc/6QyTynzr/bulb-on.png")
    {
      document.getElementById("Imagem").src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
      document.getElementById("Botão").innerHTML = "Ligar";
      document.getElementById("Bod").classList.add("Desligar");
      document.getElementById("Bod").classList.remove("Ligar");
    }

  }
  document.getElementById("Botão").addEventListener("click", changeImage);