import "./globals.css";
import Nav from "/components/Nav";
import Rodape from "/components/Rodape";

export const metadata = {
  title: "Páscoa Jovem 2024",
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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100..900&display=swap" rel="stylesheet"/>
        <link href="https://db.onlinewebfonts.com/c/55c4f556836775174bfac94178a3fe82?family=Proxima+N+W01+Reg" rel="stylesheet"/>
      </head>
      <body className="h-screen md:h-screen flex flex-col">
        <Nav />
        <main className="bg-white text-white"> {children} </main>
        <Rodape />
      </body>
    </html>
  );
}
