// Khi tải trang xong
window.onload = function () {
  const introText = document.querySelector(".intro-text");
  const imageGallery = document.querySelector(".image-gallery");
  const backgroundMusic = document.getElementById("background-music");

  // Hiển thị chữ trước
  setTimeout(() => {
    // Sau 3 giây, chữ biến mất và hình hiện lên
    introText.style.display = "none";
    imageGallery.style.display = "flex";

    // Phát nhạc
    backgroundMusic.play();

    // Hiển thị ảnh từng ảnh một
    const images = document.querySelectorAll(".image-item");
    images.forEach((image, index) => {
      setTimeout(() => {
        image.style.opacity = "1";
        image.style.transform = "scale(1)";
      }, index * 2000); // Hiện ảnh cách nhau 2 giây
    });
  }, 3000); // 3000ms tương đương 3 giây
};
