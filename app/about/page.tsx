import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <Image
        src="/images/your-photo.jpg" // Place your photo in /public/images
        alt="Tushar Panchal"
        width={120}
        height={120}
        className="rounded-full mx-auto mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">Hi, I&apos;m Tushar!</h1>
      <p className="text-lg text-gray-600">
        I write about dogs, life, maturity, tech, and my journey as an introvert. <br />
        Tink On It is my space to think out loud, share what matters, and connect with people who care.
      </p>
    </div>
  );
}
