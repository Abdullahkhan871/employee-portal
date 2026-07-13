import React from "react";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>Header Dashboard</div>
      <div>{children}</div>
      <div>footer Dashboard</div>
    </div>
  );
}
