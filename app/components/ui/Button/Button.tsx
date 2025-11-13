import type { ButtonUI } from "@types-ui";
import getLinkKind from "app/hooks/getLinkKind";
import clsx from "clsx";
import Link from "next/link";

export function Button({ data }: { data: ButtonUI }) {
  const { color, label, link, type } = data;

  const external = getLinkKind(link);

  const baseClass = `relative border-transparent border-1 ${
    color === "primary" ? "hover:border-primary" : "hover:border-white"
  } ${
    type === "default" && "white"
      ? "hover:bg-primary  transition-colors duration-300"
      : "hover:bg-white   transition-colors  duration-300"
  } group cursor-pointer w-full md:w-max inline-flex items-center gap-4 uppercase text-[16px] md:text-[20px] font-bold  overflow-hidden ${
    type === "default"
      ? "px-15 py-4.25 justify-center"
      : "py-2 pl-5 pr-2 justify-between"
  } rounded-full`;

  const colorClasses = {
    primary: "text-white bg-primary group-hover:text-primary",
    white: "bg-white text-primary  group-hover:text-white",
  };

  const icon =
    type === "arrow-right" ? (
      <span
        className={clsx(
          "w-12 h-12 flex items-center justify-center rounded-full overflow-hidden z-1",
          color === "primary"
            ? "text-primary bg-white"
            : color === "white"
            ? "text-white bg-primary"
            : "text-primary bg-white"
        )}
      >
        <span className="-translate-x-[32%] group-hover:translate-x-[32%] duration-150 flex gap-5">
          <svg
            width="25"
            height="16"
            viewBox="0 0 25 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.7071 7.23406C25.0976 7.62458 25.0976 8.25774 24.7071 8.64827L18.3431 15.0122C17.9526 15.4028 17.3195 15.4028 16.9289 15.0122C16.5384 14.6217 16.5384 13.9885 16.9289 13.598L22.5858 7.94116L16.9289 2.28431C16.5384 1.89378 16.5384 1.26062 16.9289 0.870094C17.3195 0.47957 17.9526 0.47957 18.3431 0.870094L24.7071 7.23406ZM24 7.94116V8.94116H0V7.94116V6.94116H24V7.94116Z"
              className="fill-current"
            />
          </svg>
          <svg
            width="25"
            height="16"
            viewBox="0 0 25 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.7071 7.23406C25.0976 7.62458 25.0976 8.25774 24.7071 8.64827L18.3431 15.0122C17.9526 15.4028 17.3195 15.4028 16.9289 15.0122C16.5384 14.6217 16.5384 13.9885 16.9289 13.598L22.5858 7.94116L16.9289 2.28431C16.5384 1.89378 16.5384 1.26062 16.9289 0.870094C17.3195 0.47957 17.9526 0.47957 18.3431 0.870094L24.7071 7.23406ZM24 7.94116V8.94116H0V7.94116V6.94116H24V7.94116Z"
              className="fill-current"
            />
          </svg>
        </span>
      </span>
    ) : type === "arrow-bottom" ? (
      <span
        id={type}
        className={clsx(
          " w-12 h-12 flex items-center justify-center rounded-full overflow-hidden z-1",
          color === "primary"
            ? "text-primary bg-white"
            : color === "white"
            ? "text-white bg-primary"
            : "text-primary bg-white"
        )}
      >
        <span className="rotate-90 -translate-y-[137%] group-hover:translate-y-[137%]  duration-150 flex gap-5">
          <svg
            width="25"
            height="16"
            viewBox="0 0 25 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.7071 7.23406C25.0976 7.62458 25.0976 8.25774 24.7071 8.64827L18.3431 15.0122C17.9526 15.4028 17.3195 15.4028 16.9289 15.0122C16.5384 14.6217 16.5384 13.9885 16.9289 13.598L22.5858 7.94116L16.9289 2.28431C16.5384 1.89378 16.5384 1.26062 16.9289 0.870094C17.3195 0.47957 17.9526 0.47957 18.3431 0.870094L24.7071 7.23406ZM24 7.94116V8.94116H0V7.94116V6.94116H24V7.94116Z"
              className="fill-current"
            />
          </svg>
          <svg
            width="25"
            height="16"
            viewBox="0 0 25 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.7071 7.23406C25.0976 7.62458 25.0976 8.25774 24.7071 8.64827L18.3431 15.0122C17.9526 15.4028 17.3195 15.4028 16.9289 15.0122C16.5384 14.6217 16.5384 13.9885 16.9289 13.598L22.5858 7.94116L16.9289 2.28431C16.5384 1.89378 16.5384 1.26062 16.9289 0.870094C17.3195 0.47957 17.9526 0.47957 18.3431 0.870094L24.7071 7.23406ZM24 7.94116V8.94116H0V7.94116V6.94116H24V7.94116Z"
              className="fill-current"
            />
          </svg>
        </span>
      </span>
    ) : null;

  const content = (
    <>
      <span
        className={`z-10 group-hover:${
          color === "white" ? "text-white" : "text-primary"
        }`}
      >
        {label}
      </span>
      {icon}
    </>
  );

  const classes = clsx(baseClass, colorClasses[color]);

  return external === "external" ? (
    <a
      id={`${type}-${color}`}
      className={classes}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : external === "internal" ? (
    <Link href={link} className={classes} id={`${type}-${color}`}>
      {content}
    </Link>
  ) : (
    <a href={link} id={`${type}-${color}`} className={classes}>
      {content}
    </a>
  );
}
