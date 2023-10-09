import Link from "next/link";
import React from "react";

export default async function Footer() {
  return (
    <footer className="w-full flex justify-center py-10">
      <div className="grid grid-cols-auto-fit w-4/6 divide-x-2 mmd:divide-x-0 mmd:divide-y-2 divide-black text-center gap-2">
        <div className="flex flex-col justify-center items-center mmd:pt-4">
          <Link href={"#"} className="hover:opacity-60 transition-all">
            <h1 className="text-xl mb-3 font-bold">Zapisz się!</h1>
          </Link>
          <p>Żeby otrzymywać powiadomienia o nowych ofertach!</p>
        </div>
        <nav className="flex flex-col justify-center items-center mmd:pt-4">
          <h1 className="text-xl mb-3 font-bold">Nawigacja</h1>
          <ul className="flex flex-col gap-1">
            <Link href={"/"}>
              <li className="nav-link">Strona główna</li>
            </Link>
            <Link href={"/contact"}>
              <li className="nav-link">Kontakt</li>
            </Link>
            <Link href={"/about"}>
              <li className="nav-link">O nas</li>
            </Link>
          </ul>
        </nav>
        <div className="flex flex-col justify-center items-center mmd:pt-4">
          <h1 className="text-xl mb-3 font-bold">CarRenting &copy; 2023</h1>
          <p>Wszelkie prawa zastrzeżone</p>
        </div>
      </div>
    </footer>
  );
}
