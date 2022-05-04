import * as React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import rafiki from "../images/rafiki.png";

import Button from "../components/button";
import Navbar from "../components/navbar";
import ReviewBubble from "../components/review-bubble";
import SpotifyPlayer from "../components/spotify-player";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <>
      <section className="bg-red-200 mt-0 bg-hero">
        <Navbar />
        <div>
          <div className="grid grid-cols-2 container mx-auto my-32">
            <div className="py-8">
              <p className="text-4xl font-bold">
                Semua orang ingin dicintai dan didengar. kawancerita.id akan
                setia mendengarkan!
              </p>

              <Button to="#" text="Daftar Sekarang" class="my-8 mx-3" />
            </div>
            <div>
              <img src={rafiki} alt="rafiki" />
            </div>
          </div>
        </div>
        <div className="flex justify-center my-7 py-8">
          {/* Jangan di hapus */}
          <SpotifyPlayer />
        </div>
      </section>
      <section className="h-full my-2">
        <p className="text-center text-2xl my-8 py-8">
          “The problem with having problems is that ‘someone’ always has it
          worse.” <br /> <strong>Tiffany Madison, Black and White </strong>
        </p>
        <div>
          <p className="text-center font-bold text-4xl py-8 my-8">
            Kata Mereka
          </p>
          <div className="h-full container mx-auto">
            <div className="grid grid-cols-2">
              <ReviewBubble
                name="Homebro"
                rating={4}
                ratingWord="Lorem ipsum Dolos"
                review="Lorem ipsum Dolos"
                person="https://placeholder.pics/svg/118"
                isRight={false}
              />
              <div></div>
            </div>
            <div className="grid grid-cols-2">
              <div></div>
              <ReviewBubble
                name="Homebro"
                rating={4}
                ratingWord="Lorem ipsum Dolos"
                review="Lorem ipsum Dolos"
                person="https://placeholder.pics/svg/118"
                isRight={true}
              />
            </div>
            <div className="grid grid-cols-2">
              <ReviewBubble
                name="Homebro"
                rating={4}
                ratingWord="Lorem ipsum Dolos"
                review="Lorem ipsum Dolos"
                person="https://placeholder.pics/svg/118"
                isRight={false}
              />
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <Footer>
        <div
          className="bg-white mx-auto border-melon border-2 rounded-2xl mb-10"
          style={{ width: "1000px", height: "200" }}
        >
          <p className="text-2xl text-center pt-10 pb-5 font-normal">
            Tunggu Apa lagi? Ayo mulai hidup lebih tenang, dan selesaikan segala
            permasalahan dengan berbagi ceritamu di kawancerita.id
          </p>
          <div className="flex justify-center">
            <Button to="#" text="Coba Sekarang" class="text-center mb-5" />
          </div>
        </div>
      </Footer>
    </>
  );
};

export default IndexPage;
