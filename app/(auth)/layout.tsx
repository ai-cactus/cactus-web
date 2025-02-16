import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <section className="lg:mr-[50%]">{children}</section>
      <section className="hidden lg:block w-[50%] fixed right-0 top-0 bottom-0 bg-[url(/background-1.png)] bg-[cover] bg-[left_top] bg-no-repeat">
        <div className="backdrop-blur-sm w-full h-full bg-[url(/background-2.png)] [background-size:60%] bg-[100%_100%] bg-no-repeat"></div>
      </section>
    </div>
  );
}

export default Layout;
