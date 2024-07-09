import React from "react";

function Button({ text }) {
  return (
    <div className="justify-center  mx-auto">

      <button className="px-8 py-4  bg-slate-950 rounded-medium border-2 border-blue-400 border-solid blueShadow duration-100 w-80">
        <p>{text}</p>
      </button>
    </div>
  );
}

export default Button;
