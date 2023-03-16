import * as React from "react";
import { completeAsureColor } from "../../../core";
import "./DefaultLoader.scss";
interface DefaultLoaderNeoProps {
  color?: string;
  label?: string;
}
const makeDefaultLoaderNeoColor = (color?: string): string => {
  return completeAsureColor(color, 0.5);
};
const DefaultLoader: React.FC<DefaultLoaderNeoProps> = (
  props: DefaultLoaderNeoProps
) => {
  const { color = "#8b6b10", label } = props;
  //console.log("color label loader", color,label);
  return (
    <svg
      width="80px"
      height="60px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="lds-colorbar"
    >
      <defs>
        <clipPath
          ng-attr-id="{{config.cpid}}"
          x="0"
          y="0"
          width="100"
          height="100"
          id="lds-colorbar-cpid-9d2a9cfa91489"
        >
          <path d="M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z"></path>
        </clipPath>
      </defs>
      <path
        fill="none"
        ng-attr-stroke="{{config.cf}}"
        strokeWidth="2.7928"
        d="M82,63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z"
        stroke="#5d5d5d"
      ></path>
      <g
        ng-attr-clip-path="url(#{{config.cpid}})"
        clipPath="url(#lds-colorbar-cpid-9d2a9cfa91489)"
      >
        <g transform="translate(10 0)">
          <rect
            x="-100"
            y="0"
            width="25"
            height="100"
            ng-attr-fill="{{config.c1}}"
            fill={color}
          ></rect>
          <rect
            x="-75"
            y="0"
            width="25"
            height="100"
            ng-attr-fill="{{config.c2}}"
            fill={makeDefaultLoaderNeoColor(color)}
          ></rect>
          <rect
            x="-50"
            y="0"
            width="25"
            height="100"
            ng-attr-fill="{{config.c3}}"
            fill={color}
          ></rect>
          <rect
            x="-25"
            y="0"
            width="25"
            height="100"
            ng-attr-fill="{{config.c4}}"
            fill={makeDefaultLoaderNeoColor(color)}
          ></rect>
          <rect
            x="0"
            y="0"
            width="25"
            height="100"
            ng-attr-fill="{{config.c1}}"
            fill={color}
          ></rect>
          <rect
            x="25"
            y="0"
            width="25"
            height="100"
            ng-attr-fill="{{config.c2}}"
            fill={makeDefaultLoaderNeoColor(color)}
          ></rect>
          <rect
            x="50"
            y="0"
            width="25"
            height="100"
            ng-attr-fill="{{config.c3}}"
            fill={color}
          ></rect>
          <rect
            x="75"
            y="0"
            width="25"
            height="100"
            ng-attr-fill="{{config.c4}}"
            fill={makeDefaultLoaderNeoColor(color)}
          ></rect>
          <animateTransform
            attributeName="transform"
            type="translate"
            calcMode="linear"
            values="0;100"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
      </g>
      <text
        className="files-ui-text-default-loader"
        x={`50`}
        y={`90`}
        fill={`${color}`}
      >
        {label || `loading`}
      </text>
    </svg>
  );
};
export default DefaultLoader;
