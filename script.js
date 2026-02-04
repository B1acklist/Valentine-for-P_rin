// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");


const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const buttonsPage2 = document.getElementById("letter-buttons");
const buttonsPage3 = document.getElementById("buttons-page3");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Pls let me be your BF🥺";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
yesBtn.addEventListener("click", () => {
  title.textContent = "Pls let me be your BF🥺";
  catImg.src = "cat_dance.gif";

  buttonsPage2.style.display = "none"; // ซ่อนหน้า 2
  finalText.style.display = "block";   // แสดงข้อความ
  buttonsPage3.style.display = "flex"; // แสดงปุ่มหน้า 3
  
    // 🎵 เล่นเพลงตอนเข้าหน้า 3
  loveSong.currentTime = 0;
  loveSong.volume = 0.4;
  loveSong.play();
});
const notification = document.getElementById("notification");
const notiText = notification.querySelector(".noti-text");
const notiGif = notification.querySelector(".noti-gif");

document.querySelector(".yes-page3").addEventListener("click", () => {
  buttonsPage3.style.display = "none";

  // 🔔 NOTI 1
  notiText.textContent = "จริงรึป่าว ไหนมาจุ๊บที 💖";
  notiGif.src = "cat_kiss.gif";
  notification.classList.add("show");

  // 🔔 NOTI 2 (ต่อจากอันแรก)
  setTimeout(() => {
    notiText.textContent = "อ่ะนี้ดอกไม้เราให้ 🥰";
    notiGif.src = "floreyonce-cat.gif";
  }, 4000);

  // ❌ ปิด noti หลังอันสุดท้าย
  setTimeout(() => {
    notification.classList.remove("show");
  }, 9000);
});