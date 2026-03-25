import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    document.title = "Syed Anas – Resume";
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <iframe
        src="/SYED_ANAS_RESUME_3_2_5.pdf"
        className="w-full h-full border-none"
        title="Syed Anas - Resume"
      ></iframe>
    </div>
  );
}
