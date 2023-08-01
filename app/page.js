import Navbar from "@/components/Navbar";
import Head from "next/head";
import "./globals.css";

export default function Home() {
  return (
    <div className="main w-full h-screen">
      <Navbar />
    </div>
  );
}
