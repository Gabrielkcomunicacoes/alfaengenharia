import { company, whatsappUrl } from "../site-content";
import { OfficialLogo } from "./official-logo";

export function LpTopbar() {
  return (
    <header className="site-header lp-topbar">
      <div className="header-inner container">
        <span className="brand-home" aria-label="Alfa Engenharia">
          <OfficialLogo decorative />
        </span>
        <a
          className="button button-header"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp"
          data-location="lp-topbar"
        >
          {company.phone} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
