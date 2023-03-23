import React from "react";

interface UserIconProps {
  size: number;
}

export const UserIcon = ({ size }: UserIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5225 21.9897H4.48787C2.98544 21.9897 1.82495 20.856 2.02182 19.3661L2.1358 18.497C2.34303 17.2969 3.44135 16.5416 4.63293 16.2829L11.9275 15C11.9275 15 12.0207 15 12.0725 15L19.3671 16.2829C20.5794 16.5623 21.657 17.2762 21.8642 18.497L21.9782 19.3765C22.175 20.8663 21.0146 22 19.5121 22L19.5225 21.9897Z"
      stroke="black"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="12"
      cy="7"
      r="5"
      stroke="black"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default UserIcon;
