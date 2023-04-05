import React, { useRef, useState } from "react";
import ImageBox from "./components/ImageBox";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageList, setImageList] = useState<string[]>([]);

  return (
    <div className="container">
      <div className={`gallery-box ${imageList.length > 0 ? "row" : ""}`}>
        {imageList.length === 0 && (
          <div className="text-center">
            이미지가 없습니다. <br />
            이미지를 추가해주세요.
          </div>
        )}
        <input
          type="file"
          ref={inputRef}
          onChange={(event) => {
            const file = event.currentTarget.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = (event) => {
                setImageList((prev) => [
                  ...prev,
                  event.target?.result as string,
                ]);
              };
            }
          }}
        />

        {imageList.map((val, idx) => (
          <ImageBox key={val + idx} src={val} />
        ))}

        <div
          className="plus-box"
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default App;
