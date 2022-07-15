const videoBody = document.querySelector(".InjectLayout-sc-588ddc-0.persistent-player");

videoBody.addEventListener("click", e => {
  const block = document.createElement('div');
  block.classList.add('block');
  block.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);
  document.body.prepend(block);

  block.addEventListener("dblclick", () => {
    block.remove();
  });
});
