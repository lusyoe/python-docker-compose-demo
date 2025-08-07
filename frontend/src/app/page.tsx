"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("加载中...");

  useEffect(() => {
    fetch("http://localhost:8000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("请求失败"));
  }, []);

  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1>{message}</h1>
    </main>
  );
}
