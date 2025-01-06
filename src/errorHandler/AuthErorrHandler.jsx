import React from "react";

const AuthErrorHandler = ({ error }) => {
  return (
    <div className="mt-2">
      {Object?.keys(error)?.map((key) => {
        if (typeof error[key] === "object") {
          return Object.values(
            error[key]?.map((errorMessage) => (
              <p style={{ fontSize: "12px", color: "red" }} key={errorMessage}>
                <span>
                  <img
                    className="ms-1"
                    src="assets/images/icons/warning_icon.png"
                    alt="warning icon"
                    width="18px"
                  />
                </span>
                {errorMessage}
              </p>
            ))
          );
        }
        return (
          <p style={{ fontSize: "12px", color: "red" }} key={key}>
            <span>
              <img
                className="ms-1"
                src="assets/images/icons/warning_icon.png"
                alt="warning icon"
                width="18px"
              />
            </span>
            {error[key]}
          </p>
        );
      })}
    </div>
  );
};

export default AuthErrorHandler;
