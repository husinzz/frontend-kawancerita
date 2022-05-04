import React from "react";
import Button from "./button";

export default function Navbar() {
  return (
    <nav className="justify-between flex py-5 mb-5 mx-16">
      <img src="https://placeholder.pics/svg/45" alt="brand-logo" />
      <div>
        <a className="px-11" href="/">
          Beranda
        </a>
        <a className="px-11" href="/tentangkami">
          Tentang Kami
        </a>
        <a className="px-11" href="/blog">
          Blog
        </a>
        <a className="px-11" href="/reservasi">
          Reservasi
        </a>
        <Button to="/login" text="Masuk" />
      </div>
    </nav>
  );
}
