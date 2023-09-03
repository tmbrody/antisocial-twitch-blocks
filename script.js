const videoBody = document.querySelector('[class*="InjectLayout"][class*="persistent-player"]');

videoBody.addEventListener("click", e => {
  const block = document.createElement('div');
  block.classList.add('block');
  block.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);
  document.body.prepend(block);

  block.addEventListener("dblclick", () => {
    block.remove();
  });
});
