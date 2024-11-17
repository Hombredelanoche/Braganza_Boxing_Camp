import React from "react";

export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <body>
          <section className="flex flex-col items-center justify-center w-screen min-h-screen">
            {children}
          </section>
        </body>
      </main>
    </>
  );
}
