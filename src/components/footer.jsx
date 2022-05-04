import React from "react";

export default function Footer(props) {
  return (
    <footer className="bg-footer-blob pt-16">
      {props.children}
      <div
        className="bg-banana-mania rounded-t-3xl mx-auto px-10 opacity-90 shadow-lg"
        style={{ width: "900px" }}
      >
        <div className="grid grid-cols-3 py-16">
          <div>
            <p>Hubungi Kami</p>
            <p>Jakarta, Indonesia 61252</p>
            <p>kawancerita.id@gmail.com </p>
            <p>08167431010</p>
          </div>
          <div>
            <p>Tentang Kami</p>
            ...
          </div>
          <div>
            <p>Lainnya</p>
            ...
          </div>{" "}
        </div>

        <p className="text-center pb-5">Copyright Kawancerita.id</p>
      </div>
    </footer>
  );
}
