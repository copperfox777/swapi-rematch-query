import { useNavigate, useLocation, Link } from "react-router-dom";
import { PageHeader } from "antd";
import React from "react";

type TLayout = {
  children: React.ReactNode;
};

export function Layout({ children }: TLayout) {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const subTitle = pathname.match(/\d+/g) ? "Person page" : "";

  return (
    <>
      <PageHeader
        onBack={() => navigate(-1)}
        title={<Link to={"/"}>На главную</Link>}
        subTitle={subTitle}
      />
      <div>{children}</div>
    </>
  );
}
