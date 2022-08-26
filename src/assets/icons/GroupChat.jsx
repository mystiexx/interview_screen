import React from "react";

const GroupChat = (props) => {
  return (
    <div>
      <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.33 14.976a.5.5 0 0 0 .853-.356l-.013-3.699V4.605A2.105 2.105 0 0 0 17.065 2.5H7.24a2.105 2.105 0 0 0-2.105 2.105V7.5h5.198a3 3 0 0 1 3 3v2.526h3.047l1.95 1.95Z"
          fill="#1BC5BD"
        />
        <path
          opacity={0.3}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.654 15v-4.167c0-.92.746-1.666 1.667-1.666h6.667c.92 0 1.666.746 1.666 1.666V15c0 .92-.746 1.667-1.666 1.667h-6.57l-.896.857a.5.5 0 0 1-.846-.361V15.27a1.678 1.678 0 0 1-.022-.27ZM5 12.083c0-.23.187-.416.417-.416h4.166a.417.417 0 1 1 0 .833H5.417A.417.417 0 0 1 5 12.083Zm2.917 1.25a.417.417 0 0 0 0 .834h1.666a.417.417 0 0 0 0-.834H7.917Z"
          fill="#1BC5BD"
        />
      </svg>
    </div>
  );
};

export default GroupChat;
