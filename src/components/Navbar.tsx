"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav style={{ background: "#333", padding: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
      <Link href="/" style={{ color: pathname === "/" ? "black" : "white", textDecoration: "none", padding: "0.5rem 1rem", border: "1px solid white", borderRadius: "5px", background: pathname === "/" ? "white" : "transparent" }}>
        Home
      </Link>
      <Link href="/demo-login" style={{ color: pathname === "/demo-login" ? "black" : "white", textDecoration: "none", padding: "0.5rem 1rem", border: "1px solid white", borderRadius: "5px", background: pathname === "/demo-login" ? "white" : "transparent" }}>
        Demo Login
      </Link>
      <Link href="/pilot-dashboard" style={{ color: pathname === "/pilot-dashboard" ? "black" : "white", textDecoration: "none", padding: "0.5rem 1rem", border: "1px solid white", borderRadius: "5px", background: pathname === "/pilot-dashboard" ? "white" : "transparent" }}>
        Pilot
      </Link>
      <Link href="/mechanic-dashboard" style={{ color: pathname === "/mechanic-dashboard" ? "black" : "white", textDecoration: "none", padding: "0.5rem 1rem", border: "1px solid white", borderRadius: "5px", background: pathname === "/mechanic-dashboard" ? "white" : "transparent" }}>
        Mechanic
      </Link>
      <Link href="/admin-dashboard" style={{ color: pathname === "/admin-dashboard" ? "black" : "white", textDecoration: "none", padding: "0.5rem 1rem", border: "1px solid white", borderRadius: "5px", background: pathname === "/admin-dashboard" ? "white" : "transparent" }}>
        Admin
      </Link>
    </nav>
  );
}
