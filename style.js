function handlesubit() {
  // làm cho email chuyển sang in thường
  const emailvalue = document.getElementById("email").value;
  // hiển thị lỗi email
  const erroremail = document.getElementById("error-email");
  // xác minh email có đúng cấu trúc không
  const checkmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //  dùng match để check email vừa nhập
  const check = emailvalue.match(checkmail);
  // lấy phần chứa thông tin cá nhân ra
  const sectionconten = document.querySelector("#thongtin .info-hide");
  console.log(sectionconten);
  const subitcontrol = document.querySelector(".subit-email");
  if (check) {
    sectionconten.style.display = "block";
    subitcontrol.style.display = "none";
    erroremail.innerHTML = "";
  } else {
    //hiện thị lỗi khi nhập sai định dạng email
    erroremail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}
// chỉ chuột vào thì hiện nút viewmore
function mouseHoverIn(element) {
  if (element.querySelector(".job-conten").classList.value.includes("hide")) {
    const viewMore = element.querySelector(".view-more");
    viewMore.classList.remove("hide");
  }
}
// bỏ chuột ra thì ẩn nút viewmore
function mouseHoverOut(element) {
  if (element.querySelector(".job-conten").classList.value.includes("hide")) {
    const viewMore = element.querySelector(".view-more");
    viewMore.classList.add("hide");
  }
}
// hiển thị nội dung khi nhấn vào nút viewmore
function showInfo(element) {
  const parentElement = element.closest(".job-view");
  console.log(parentElement);
  const showInfo = parentElement.querySelector(".job-conten");
  console.log(showInfo);
  showInfo.classList.remove("hide");
  parentElement.querySelector(".view-more").classList.add("hide");
  parentElement.querySelector(".view-less").classList.remove("hide");
}
// ẩn nội dung khi ấn vào nút viewless
function hideInfo(element) {
  const parentElement = element.closest(".job-view");
  const showInfo = parentElement.querySelector(".job-conten");
  showInfo.classList.add("hide");
  parentElement.querySelector(".view-more").classList.remove("hide");
  parentElement.querySelector(".view-less").classList.add("hide");
}
