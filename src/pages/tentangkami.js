import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Button from "../components/button";

import bro from "../images/heartbroken.png";
import highfive from "../images/highfive.png";
import rahasisa from "../images/whisper.png";
import lock from "../images/lock.png"
import poker from "../images/poker.png"

export default function Page() {
  return (
    <>
      <section className="bg-about-hero pb-32 mb-32">
        <Navbar />
        <div className="grid grid-cols-2 container mx-auto pt-32 pb-64">
          <div className="flex justify-center items-center">
            <div>
              <p className="text-4xl font-bold pb-5">
                Kami Hadir Siap Menampung Keluh Kesah Kamu dengan Rahasia!
              </p>
              <p className="text-sm pb-5">
                tanpa basa basi asdk kaskadjs ejekkerker ansdjsds oke
              </p>
              <Button to="#" text="Pelajari Lebih Lanjut" />
            </div>
          </div>
          <div>
            <img src={bro} alt="broken heart" className="mx-auto" />
          </div>
        </div>
      </section>
      <section className="container mx-auto my-20">
        <div className="grid grid-cols-2">
          <div>
            <img src={highfive} alt="A girl and a boy high fiveing" />{" "}
          </div>
          <div>
            <p className="font-bold text-4xl">Selamat datang di Kawan Cerita</p>
            <p className="max-w-xl pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              senectus suspendisse eget pretium fames est. Sed scelerisque nibh
              consequat ante consectetur vulputate commodo nam. Nisl quis id
              erat in tellus at mauris, pharetra varius. Viverra amet, arcu
              elementum, nisi nec placerat. Id consequat risus, in lectus.
              Adipiscing urna urna habitant dolor diam diam ornare elementum.
              Quisque amet viverra enim, leo. Egestas non consectetur sem
              viverra fusce purus sit diam. Egestas habitant in egestas mattis
              nam in quis pharetra eget. Massa eget bibendum morbi urna ornare
              integer vulputate diam orci. Ante ultrices ultrices vehicula
              egestas. Diam orci odio egestas nisi, orci tempor ornare risus.
              Amet dictum fermentum vitae fusce nisl ornare tincidunt.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="border-melon border-2 rounded-xl my-20 shadow-2xl">
          <p className="text-center text-4xl font-bold py-16">Kenapa harus Kawan Cerita</p>
          <div className="grid grid-cols-3 pb-20">
            <div>
              <img className="mx-auto" src={rahasisa} alt="" />
              <p className="text-center font-bold text-2xl">Rahasia</p> 
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
            </div><div>
              <img className="mx-auto" src={lock} alt="" />
              <p className="text-center font-bold text-2xl">Aman</p> 
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
            </div><div>
              <img className="mx-auto" src={poker} alt="" />
              <p className="text-center font-bold text-2xl">Bahagia</p> 
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
