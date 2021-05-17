import React from "react";
import * as S from "./styled";

const Atom = () => {
  const layers = {
    L: { size: 10 },
    M: { size: 15 },
    N: { size: 20 },
    O: { size: 25 },
    P: { size: 30 },
    Q: { size: 35 },
  };

  return (
    <S.Wrapper>
      <S.Center />
      {Object.values(layers).map((layer) => (
        <S.Circuit size={layer.size} />
      ))}
    </S.Wrapper>
  );
};

function circuit(num, radius, size) {
  const atom = document.querySelector(`.${level}`);
  const div = 360 / num;
  for (var i = 1; i <= num; ++i) {
    var el = document.createElement("div");
    el.className = "electron";
    el.style.position = "absolute";
    var y = Math.sin(div * i * (Math.PI / 180)) * radius;
    var x = Math.cos(div * i * (Math.PI / 180)) * radius;
    el.style.top = (y + 14).toString() + "px";
    el.style.left = (x + 14).toString() + "px";
    atom.appendChild(el);
  }
}

export default Atom;
