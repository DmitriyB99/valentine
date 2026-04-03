import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Валентинка: Игра для Марии",
  description:
    "Сыграй в уникальную карточную игру и найди все пары фотографий, чтобы открыть сюрприз для Марии! Идеальный способ провести время вместе и создать незабываемые воспоминания в День святого Валентина.",
  keywords: [
    "Valentine's card game",
    "romantic proposal game",
    "photo card challenge",
    "Valentine's Day surprise",
    "couples game",
    "valentine's day game",
    "proposal game",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
