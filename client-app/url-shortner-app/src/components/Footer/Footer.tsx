import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-[#116466] text-white text-base text-center py-6 rounded-t-3xl">
      Made by Abhinav with love &#9829;
    </div>
  );
};

export default Footer;
