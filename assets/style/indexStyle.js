/* @import "./variables.scss";

* {
  margin: 0px;
  padding: 0px;
}

.lara {
  background-color:$background;
  display: grid;
  grid-template-columns: 200px 85% ;
  grid-template-rows: 68px 100% 68px;
  font-family: $font;
  width: 100%;
  height: 100vh;
}

.lara #headerHome {
  grid-column: 2/3;
  grid-row: 1/2;
}
 */

import css from "styled-jsx/css";

export default css.index`

.lara {
  background-color:$background;
  display: grid;
  grid-template-columns: 200px 85% ;
  grid-template-rows: 68px 100% 68px;
  font-family: $font;
  width: 1440px;
  height: 100vh;
}
`;
/* 
* {
  margin: 0px;
  padding: 0px;
} */