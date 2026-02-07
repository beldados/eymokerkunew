//  # Global UI/Theme (e.g., HTML structure, fonts)
// src/app/layout.tsx
import type { Metadata } from 'next'; // For SEO/metadata
// @ts-ignore: allow side-effect import of global CSS without type declarations
import '../styles/globals.css'; // SD Steal: Import your global CSS (like Tailwind) here

// 1. METADATA: Define the basic info for the browser/search engines
export const metadata: Metadata = {
  title: 'Eyemokerkunew | Grade 12 Prep MVP',
  description: 'Action-first Fullstack MVP for Ethiopian Grade 12 Exam Prep.',
};

// 2. ROOT LAYOUT COMPONENT: Must be a default export.
// SD Steal: It MUST accept and render the 'children' prop.
export default function RootLayout({
  children, // This is where the content from page.tsx is inserted
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* SD Steal: We apply a global font and background class here */}
      <body className="bg-gray-100 text-gray-800">
        <main className="min-h-screen flex flex-col justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
// SD Note: Now, the infrastructure is solid. The router is happy.
