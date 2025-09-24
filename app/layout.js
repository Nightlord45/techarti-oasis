import Navigation from "@/app/components/Navigation";
import Logo from "@/app/components/Logo";

export const metadata = {
  title: "The TechArti Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The TechArti Oasis</footer>
      </body>
    </html>
  );
}
