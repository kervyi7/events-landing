function interval() {
  let code = 1;
  setInterval(() => {
    code++;
    showImage(code);
    if (code === 6) {
      code = 0;
    }
  }, 3000)
}

function showImage(code) {
  const gallery = document.getElementById('mainImg');
  gallery.src = `./img/${code}.jpg`;
}

function selectImage(code) {
  showImage(code);
}

function toggleButtons(disableId, enableId) {
  document.getElementById(disableId).disabled = true;
  document.getElementById(enableId).disabled = false;

  if (disableId === 'btn1') {
    document.getElementById('online').style.display = 'flex';
    document.getElementById('onsite').style.display = 'none';
  } else {
    document.getElementById('online').style.display = 'none';
    document.getElementById('onsite').style.display = 'flex';
  }
}