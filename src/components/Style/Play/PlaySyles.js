import css from "styled-jsx/css";

export default css.PlayStyles`
.info__song {
  grid-column: 1/2;
  grid-row: 4/5;
  background: linear-gradient(#e9a0e9, #9e4f9e);
  display: flex;
  align-items: center;
  justify-content: center;
  width:230px;
}

.info__song img {
  height: 50px;
  margin-right: 10px;
  border-radius: 10%;
}
.artist h4 {
  color: white;
}
.artist p {
  color: #f69da8;
  font-size: small;
}
.player {
  grid-column: 2/3;
  grid-row: 4/5;
  background-color: #0f1e36;
  width: 100%;
}
.songPlayer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
}
@media screen and (max-width: 1024px) {

}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 600px) {
}
@media screen and (max-width: 480px) {
}
@media screen and (max-width: 416px) {
}


`;
