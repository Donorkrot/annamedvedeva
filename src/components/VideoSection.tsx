'use client';
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

export default function VideoSection() {
  const { tr } = useTranslation();

  return (
    <section id="s6" className="section">
      <div className="s6-content">
        <div className="s6-video-wrap">
          <div className="s6-video-placeholder">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <circle cx="28" cy="28" r="27" stroke="#4a3828" strokeWidth="1.5" />
              <polygon points="22,18 42,28 22,38" fill="#332000" />
            </svg>
            <p>{tr('s6_video')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
