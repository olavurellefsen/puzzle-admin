import React from "react";
import { CallbackContainer, LoadingImage } from './Callback.style'; 
import loading from "./loading.svg";

export default () => {
  return (
    <CallbackContainer>
      <LoadingImage src={loading} alt="loading" data-testid="LoadingImage" />
    </CallbackContainer>
  );
}
