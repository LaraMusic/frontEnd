import css from "styled-jsx/css";

export default css.ListTrackStyle`
.container__home {
  background: linear-gradient(#faf0fa, #d6cbd6);
}
.track {
  height: 360px;
  margin-left: 2%;
  flex-wrap: nowrap;
  overflow-y: scroll;
}
.track::-webkit-scrollbar {
  display: none;
}

.top__tracks__title h2 {
  font-size: 1.3rem;
  font-weight: bold;
  padding-left: 1rem;
  margin-bottom: 1rem;
}

.track_container {
  height: 340px;
  overflow-y: scroll;
}

.tab__top {
  display: flex;
  margin-bottom: 1rem;
  margin-left: 3%;
}

.tab__top p {
  font-weight: bold;
  opacity: 0.7;
}

.tab__top__number {
  width: 30%;
}

.tab__top__title,
.tab__top__plays,
.tab__top__time {
  width: 100%;
  margin-left: 25%;
}



.tab__music__title {
  width: 100%;
  margin-right:20%;
  margin-left:10%;
}
.tab__music__plays{
  width: 100%;
  margin-right:10%;
}
.tab__music__time {
  width: 100%;
  margin-right:0;
}

.tab__music {
  display: flex;
  padding: 1rem 1rem;
}
.tab__music span{
    opacity:0.8;
    font-weight:300;
}
.tab__music p{
  margin-right: 10%;

}
.tab__music:hover {
  transition: all 0.3s ease-in-out;
  background-color: white;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor: context-menu;
}

.tab__music__icons {
  width: 100%;
  display: flex;
  justify-content: space-between;

}

.icon {
  cursor: pointer;
  opacity: 0.5;
}
.icon:hover {
  opacity: 1;
}

.content__music {
  width: 60vw;
  margin: 3rem 0;
}
.about__album {
  margin-top: 5em;
  grid-column: 2/4;
  grid-row: 3/5;
  display: flex;
  background: linear-gradient(#faf0fa, #d6cbd6);
  position: relative;
}

section h2 {
  font-size: 0.4rem;
}
@media screen and (max-width: 1024px) {

}
@media screen and (max-width: 768px) {
  .tab__top__title,
.tab__top__plays,
.tab__top__time {
  width: 100%;
  margin-left: 15%;
}
}
@media screen and (max-width: 600px) {
}
@media screen and (max-width: 480px) {
}
@media screen and (max-width: 416px) {
}

`;
