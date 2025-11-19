import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

function Layout({ children, }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;