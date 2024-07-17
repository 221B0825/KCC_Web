function showPic(obj) {
  const source = obj.getAttribute("href");
  const titleName = obj.getAttribute("title");
  const placeholder = document.getElementById("placeholder");
  const description = document.getElementById("description");

  placeholder.setAttribute("src", source);
  // description.innerHTML = titleName;
  if (description.firstChild.nodeType === 3) {
    description.firstChild.nodeValue = titleName;
  }
}

function prepareGallery() {
  const imagegallery = document.getElementById("imagegallery");
  const links = imagegallery.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        // a태그의 기본태그인 href로 이동하려는 기능 해제
        showPic(this);
      },
      false
    );
  }
}

window.onload = prepareGallery;
