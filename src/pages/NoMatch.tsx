import { Link } from "react-router-dom";
import React from "react";

export default function NoMatch() {
  return (
    <div>
      <h2>Страница не найдена</h2>
      <p>
        <Link to="/">На главную</Link>
      </p>
    </div>
  );
}
