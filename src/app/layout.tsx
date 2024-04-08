import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { WorkoutsContextProvider } from "@/context/WorkoutContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workouts.io",
  description: "Track your workouts!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WorkoutsContextProvider>
          <Navbar />
          <main className="flex min-h-screen flex-col items-center justify-center">
            {children}
          </main>
        </WorkoutsContextProvider>
      </body>
    </html>
  );
}
