import NavHeader from "../components/nav.header";

export type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <NavHeader isDark={false} />

      {/* Header Navbar */}
      <main>{children}</main>

      <footer></footer>
    </>
  );
}
