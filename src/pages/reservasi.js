import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Button from "../components/button";

import consullting from "../images/consult.png";
import hero from "../images/hero-reservasi.png";

export default function Page() {
  return (
    <>
      <section className="bg-reservasi-hero pb-32 mb-32">
        <Navbar />
        <div className="grid grid-cols-2 container mx-auto pt-32 pb-64">
          <div className="flex justify-center items-center">
            <div>
              <p className="text-4xl font-bold pb-5">
                Konsultasi dengan Mentor
              </p>
              <p className="text-sm pb-5">Punya maalah hidup? cerita bos</p>
              <Button to="#" text="Daftar Sekarang" />
            </div>
          </div>
          <div>
            <img src={hero} alt="" className="mx-auto" />
          </div>
        </div>
      </section>
      <section className="container mx-auto my-20">
        <div className="grid grid-cols-2">
          <div>
            <img src={consullting} alt="A girl and a boy high fiveing" className="mx-auto" />{" "}
          </div>
          <div>
            <p className="font-bold text-4xl">
              Dengan konsultasi, Ngapain, dan Dapet apa aja sih?
            </p>
            <ul className="list-disc ml-5">
              <li className="max-w-xl pt-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada senectus suspendisse eget pretium fames est.
              </li>
              <li className="max-w-xl pt-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada senectus suspendisse eget pretium fames est.
              </li>
              <li className="max-w-xl pt-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada senectus suspendisse eget pretium fames est.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
