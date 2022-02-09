import React from "react";
import { Progress } from "semantic-ui-react";

//progressbar --> progression of a task in %
const ProgressBar = ({ uploadState, percentUploaded }) =>
  uploadState === "uploading" && (
    <Progress
      className="progress__bar"
      percent={percentUploaded}
      progress
      indicating
      size="medium"
      inverted
    />
  );

export default ProgressBar;
