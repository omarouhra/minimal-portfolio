import React from "react";
import IconLink from "../core/IconLink";
import Title from "../core/Title";

function Footer() {
  return (
    <footer className='py-12 flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center justify-between'>
      <Title title="Contact" />
      <div className="flex space-x-4">
        <IconLink label="Twitter" />
        <IconLink label="Dribbble" />
        <IconLink label="Linkedin" />
      </div>
    </footer>
  );
}

export default Footer;
