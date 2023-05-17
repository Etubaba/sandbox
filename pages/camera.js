import React, { useCallback, useRef, useState } from "react";
import Camera from "react-html5-camera-photo";
// import "react-html5-camera-photo/build/css/index.css";

// import Webcam from "react-webcam";

const camera = () => {
  const [img64, setImg64] = useState("");
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto", dataUri);
    setImg64(dataUri);
  }

  //   function base64ToPngFile(base64Image) {
  //     const byteString = window.atob(base64Image.split(",")[1]);
  //     const ab = new ArrayBuffer(byteString.length);
  //     const ia = new Uint8Array(ab);

  //     for (let i = 0; i < byteString.length; i++) {
  //       ia[i] = byteString.charCodeAt(i);
  //     }

  //     const file = new File([ab], "image.png", { type: "image/png" });
  //     return file;
  //   }

  //   const webcamRef = useRef(null);
  //   const capture = useCallback(() => {
  //     const imageSrc = webcamRef.current.getScreenshot();
  //     setImg64(imageSrc);
  //     console.log(imageSrc);
  //   }, [webcamRef]);

  const file = img64 === "" ? null : base64ToPngFile(img64);

  console.log(file);
  return (
    <div>
      camera
      <div className=" mt-10 justify-center items-center">
        {/* <Camera onTakePhoto={(data) => handleTakePhoto(data)}/> */}
        <div className="mb-10">pick photo</div>

        <Camera
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
        />

        {/* <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" /> */}
      </div>
    </div>
  );
};

export default camera;
