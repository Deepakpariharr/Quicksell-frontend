import React, { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period with a 3-second delay
    setTimeout(() => {
      setIsLoading(false);
    }, 100000);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {isLoading ? (
        <Bars
          height={80}
          width={80}
          color="blue"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <span
          style={{
            fontWeight: "bolder",
            letterSpacing: "2px",
          }}
        >
        
        </span>
      )}
    </div>
  );
};

export default Loading;
