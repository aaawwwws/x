(async () => {
  const delayTime = 100;
  let selects = [];
  while (selects.length === 0) {
    selects = document.querySelectorAll(
      ".css-175oi2r.r-6koalj.r-eqz5dr.r-16y2uox.r-1habvwh.r-cnw61z.r-13qz1uu.r-1ny4l3l.r-1loqt21"
    );
    await new Promise((resolve) => setTimeout(resolve, delayTime));
  }
  const removeAriaNames = [
    "Grok",
    "求人",
    "コミュニティ",
    "プレミアム",
    "認証済み組織",
  ];
  for (const select of selects) {
    if (removeAriaNames.includes(select.ariaLabel)) select.remove();
  }
})();
