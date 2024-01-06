import React from "react";

function Footer() {
  const yearContent = (
    <>
      {new Date().getFullYear() - 1}-{new Date().getFullYear()}
    </>
  );
  return (
    <div className="py-3 text-center">
      <p className="text-sm  opacity-70 my-3">
        &copy; {yearContent}&#44; Kaung Zin Hein&#44; All Rights
        Reserved.
      </p>
    </div>
  );
}

export default Footer;
