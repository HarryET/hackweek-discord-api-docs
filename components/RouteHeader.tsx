import { Fragment } from "react";
import classNames from "classnames";
import { H2 } from "./mdx/Heading";

type RESTMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

interface MethodBadgeProps {
  method: RESTMethod;
}
function MethodBadge({ method }: MethodBadgeProps) {
  const name = method.toUpperCase();

  const classes = classNames("px-2 py-1 text-sm rounded uppercase", {
    "bg-blue-100 text-blue-700 dark:bg-blue-600 dark:text-white":
      name === "GET",
    "bg-green-100 text-green-700 dark:bg-green-600 dark:text-white":
      name === "POST",
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-white":
      name === "PATCH" || name === "PUT",
    "bg-red-100 text-red-500 dark:bg-red-700 dark:text-white":
      name === "DELETE",
  });

  return <code className={classes}>{method}</code>;
}

interface RouteHeaderProps {
  method: RESTMethod;
  url: string;
  children: React.ReactNode;
}

export default function RouteHeader({
  method,
  url,
  children,
}: RouteHeaderProps) {
  return (
    <Fragment>
      <H2 className="mb-0">{children}</H2>
      <div className="flex items-center">
        <MethodBadge method={method} />
        <code className="text-text-light dark:text-text-dark p-2 break-all">
          {url}
        </code>
      </div>
    </Fragment>
  );
}
