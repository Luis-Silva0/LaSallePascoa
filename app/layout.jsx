import "./globals.css";
import Nav from "/components/Nav";
import Rodape from "/components/Rodape";

export const metadata = {
  title: "La Salle - Páscoa Jovem 2024",
  description: "Página web da Páscoa Jovem 2024",
};

export default function RootLayout ({children}) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="https://www.lasalle.pt/wp-content/uploads/2020/12/cropped-lasalle-09-192x192.png"
        type="image/png"
        sizes="192x192"
      />
      </head>
      <body className="h-screen md:h-auto flex flex-col">
        <Nav />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
