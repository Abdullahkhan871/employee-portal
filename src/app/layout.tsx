import React from "react";

export default function layoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div>Header</div>
        {children}
        <div>Footer</div>
      </body>
    </html>
  );
}
