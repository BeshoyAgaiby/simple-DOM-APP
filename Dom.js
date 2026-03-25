var imgList = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector(".lightbox");
var lightBocItem = document.querySelector(".lightboxitem");
var nextBtn = document.getElementById("next");
var backBtn = document.getElementById("back");
var closeBtn = document.getElementById("close");

var currentSlideIndex = 0;

for (var i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    // من targetمحتاج اجيب مسار كل صوره عشان اضغط عليها
    var imgSrc = e.target.getAttribute("src");
    lightBocItem.style.backgroundImage = `url(${imgSrc})`;
    //احول مكان الصور ل arraay
    currentSlideIndex = imgList.indexOf(e.target);
    lightBoxContainer.classList.replace("d-none", "d-flex");
  });
}

//تقلب الصور يمين وشمال
function nextItem() {
  currentSlideIndex++;
  if (currentSlideIndex == imgList.length) {
    currentSlideIndex = 0;
  }
  var imgSrc = imgList[currentSlideIndex].getAttribute("src");
  lightBocItem.style.backgroundImage = `url(${imgSrc})`;
  console.log(currentSlideIndex);
}

function backItem() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = imgList.length - 1;
  }
  var imgSrc = imgList[currentSlideIndex].getAttribute("src");
  lightBocItem.style.backgroundImage = `url(${imgSrc})`;
  console.log(currentSlideIndex);
}
nextBtn.addEventListener("click", nextItem);
backBtn.addEventListener("click", backItem);
//function close
closeBtn.addEventListener("click", function () {
  lightBoxContainer.classList.replace("d-flex", "d-none");
});
