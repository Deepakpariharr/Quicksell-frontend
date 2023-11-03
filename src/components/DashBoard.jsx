import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import "./DashBoard.css";
import Card from "./Card";

const DashView = () => {
  const [displayUserInfo, setDisplayUserInfo] = useState(true);
  const { selectedData } = useSelector((state) => state.SelectDataReducer);

  const toggleUserInfo = () => {
    setDisplayUserInfo(!displayUserInfo);
  };

  useEffect(() => {
    // Your custom logic for handling data or effects can go here
  }, [selectedData]);

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => (
          <div key={index} className="dashCardContainer">
            <div className="dashCardHeading flex-sb">
              <div className="leftView">
                {displayUserInfo ? (
                  <DiCodeigniter />
                ) : (
                  <div
                    className="imageContainer relative"
                    style={{ width: "15px", height: "15px", display: "inline-block" }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                      src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="UserImage"
                    />
                  </div>
                )}
                <span>
                  {" "}
                  {elem[index]?.title} {elem[index]?.value?.length}
                </span>
              </div>
              <div className="rightView" onClick={toggleUserInfo}>
                <AiOutlinePlus /> <span style={{ letterSpacing: "2px" }}>...</span>
              </div>
            </div>
            <div className="dashList flex-gap-10">
            {elem[index]?.value?.map((elem, ind) => (
        <Card
          key={ind}
          id={elem.id}
          title={elem.title}
          tag={elem.tag}
  />
))}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default DashView;
