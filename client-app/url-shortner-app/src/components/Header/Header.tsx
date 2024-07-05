import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-[#116466]">
      <div className="container p-2 mx-auto">
        <nav className="py-5">
          <div className="text-base text-white text-3xl">URLify</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
