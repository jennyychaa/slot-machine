import "./styles.css";

import { spinWheel } from "./api";

import Instructions from "./Instructions";
import busySpinner from "./busy.gif";

export default function App() {
  return (
    <>
      <Instructions />

      <main>{/* code goes here :) */}</main>
    </>
  );
}
