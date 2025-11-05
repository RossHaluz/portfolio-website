import Image from "next/image";
import React from "react";

const SignatureSVG = () => {
  return (
    <div className="self-end">
      <Image src="/sign.svg" alt="sign" width={180} height={180}/>
    </div>
  );
};

export default SignatureSVG;
