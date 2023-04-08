window.onload = function() {
  var loader = document.querySelector(".loader");
  var loaderBar = document.querySelector(".loader-bar");
  var loaderPercent = document.querySelector(".loader span");
  
  var successMessage = document.createElement("div");
  successMessage.classList.add("loader-success-message");
  successMessage.innerHTML = "Данные успешно переданы";
  loader.appendChild(successMessage);

  var accessMessage = document.createElement("div");
  accessMessage.classList.add("loader-access-message");
  accessMessage.innerHTML = "Доступ к базе данных установлен";
  loader.appendChild(accessMessage);

  var loaderText = document.createElement("div");
  loaderText.classList.add("loader-text");
  loaderText.innerHTML = "Ищем данные в базе...";
  loader.appendChild(loaderText);

  var percent = 0;
  var interval = setInterval(function() {
    percent++;
    if (percent < 100) {
      loaderBar.style.width = percent + "%";
      loaderPercent.innerHTML = percent + "%";
    } else {
      loaderBar.style.width = "100%";
      loaderPercent.style.display = "none";
      loaderText.style.display = "none";
      clearInterval(interval);
      loaderBar.classList.add("green");
      successMessage.style.opacity = "1";
      accessMessage.style.opacity = "1";
      loaderBar.style.animation = "none";
    }
  }, 15);
}
