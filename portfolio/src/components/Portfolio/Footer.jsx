import React from "react";
import { Link } from "react-router-dom";
import FooterCss from './Styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={FooterCss.footer}>
    
      <div>
        <p><span className={FooterCss.thisWeb}>©2023 Carolina Pallaro</span> About this website: Built with React & Vite (App Router & Server Actions) Email JS. Deployed on Vercel.</p>
      </div>
    </footer>
  );
}
