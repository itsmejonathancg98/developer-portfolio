"use client";

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures this component only renders on the client
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
