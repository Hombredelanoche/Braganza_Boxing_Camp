import React from "react";

export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <body className="flex flex-col items-center justify-center w-screen h-screen">
          <section>{children}</section>
        </body>
      </main>
    </>
  );
}
