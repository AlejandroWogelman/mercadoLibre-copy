interface Params {
  selected: string;
  styles: { border: string; borderActive: string };
}

export const check = ({ selected, styles }: Params) => {
  const imgsContainer = document.querySelectorAll("#imgContainer figure img");

  const { border, borderActive } = styles;

  imgsContainer.forEach((el) => {
    const src = el.getAttribute("src");
    const condition= src === selected
    
    if (condition) {
      el.parentElement?.classList.remove(border);
      el.classList.add(borderActive);
    } else {
      el.classList.remove(borderActive);
      el.parentElement?.classList.add(border);
    }
  });
};
