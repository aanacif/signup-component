"use strict";var formSent=document.querySelector(".success"),validateForm=function(e){e.preventDefault(),document.getElementById("login-form").reset(),formSent.insertAdjacentHTML("afterbegin","Form sent, Congrats!")};function invalid(e){e.preventDefault();var t="#".concat(e.currentTarget.labels[0].id);document.querySelector(t).removeAttribute("hidden");var r="#".concat(e.currentTarget.id);document.querySelector("".concat(r,"-icon")).removeAttribute("hidden"),e.currentTarget.classList.add("error")}function valid(e){e.preventDefault(),formSent.innerHTML&&(formSent.innerHTML="");var t="#".concat(e.currentTarget.labels[0].id);document.querySelector(t).setAttribute("hidden","");var r="#".concat(e.currentTarget.id);document.querySelector("".concat(r,"-icon")).setAttribute("hidden",""),e.currentTarget.classList.remove("error")}
//# sourceMappingURL=script.js.map