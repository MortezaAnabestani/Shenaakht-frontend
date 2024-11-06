import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdvForHeader = () => {
  const [adv, setAdv] = useState(false);
  return (
    adv && (
      <div className="d-none d-md-block">
        <div className="h-45 bg-dark d-flex justify-content-center flex-column">
          <Link className="align-self-start me-2 mt-2 p-1" onClick={() => setAdv(!adv)}>
            <i class="fa fa-close text-light"></i>
          </Link>
          <img src="./assets/images/adv/advForHeader.png" alt="adv" />
          <p className="text-info fs-6 align-self-end mt-2 ms-2">تبلیغات</p>
        </div>
      </div>
    )
  );
};

export default AdvForHeader;
