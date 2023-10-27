import React from "react";
import { Link } from "react-router-dom";
import FooterCss from './Styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={FooterCss.footer}>
      <div>
        <p className={FooterCss.p1}>©2023 Carolina Pallaro</p>
      </div>
      <div>
        <p>About this website: Built with React & Vite (App Router & Server Actions) React Email. Deployed on Vercel.</p>
      </div>
    </footer>
  );
}
