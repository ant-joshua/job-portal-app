import NavHeader from "../components/nav.header";

export type MainLayoutProps = {
  children: React.ReactNode;
  bgColor?: string;
};

export function MainLayout({ children, bgColor }: MainLayoutProps) {
  return (
    <>
      <NavHeader isDark={false} />

      {/* Header Navbar */}
      <main className={`${bgColor ?? "bg-white"} min-h-screen`}>
        {children}
      </main>

      <footer></footer>
    </>
  );
}
