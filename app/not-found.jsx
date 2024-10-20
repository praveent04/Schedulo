import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="relative w-full h-1/2">
        <Image
          src="/404image.jpg"
          alt="404 error image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1 className="text-4xl text-blue-600 mt-6">Oops !! Page Not Found :( </h1>
    </div>
  );
}
