import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

function Spinner() {
  return (
    <div className="sweet-loading" style={{ marginTop: "15px" }}>
      <BarLoader color="#cda37c" css={override} />
    </div>
  );
}

export default Spinner;
