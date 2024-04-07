import { NavbarDemo } from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

export default function Home(){
  return(
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <NavbarDemo/>
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="relative z-10 text-3xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mt-[120px]">
      Scan, Upload, Succeed: 
      </h1>
      <h1 className="relative z-10 text-xl md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mt-4">
      NoteHUB Makes Note-taking Effortless
      </h1>
      <p></p>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 mt-5 text-sm text-center relative z-10">
      Say goodbye to the fear of losing and managing physical notes. NoteHUB empowers students to effortlessly digitize and organize their notes, ensuring easy access and peace of mind. With NoteHUB, focus on learning, not on managing papers.Whether you're a student, professional or just someone who likes to jot down notes, we've got you covered.
      </p>
      
    </div>
    <BackgroundBeams />
  </div>
  )
}