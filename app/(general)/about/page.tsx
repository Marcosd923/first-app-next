import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Marcos, Daut",
};

export default function AboutPage() {
  return (
    <>
      <span className="text-xl">About page</span>
    </>
  );
}
