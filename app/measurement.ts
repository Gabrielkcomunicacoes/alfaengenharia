// Integração intencionalmente desativada. Nenhum SDK, cookie ou envio de rede.
// Ativar somente após aprovação dos identificadores e configuração de consentimento.
const measurementEnabled = false;
type Interaction =
  | "whatsapp_click"
  | "email_click"
  | "form_start"
  | "form_whatsapp_open";
type Context = { location: string; service?: string };
const allowedLocations = new Set([
  "hero",
  "header",
  "mobile-menu",
  "service",
  "contact",
  "footer",
  "contact-form",
]);
const allowedServices = new Set(["predial", "incendio", "eletrica", "outro"]);

export function recordInteraction(event: Interaction, context: Context) {
  if (!measurementEnabled || typeof window === "undefined") return;
  // Somente valores de uma lista fechada. Nunca incluir texto de campos ou URL do WhatsApp.
  const safeContext = {
    location: allowedLocations.has(context.location)
      ? context.location
      : "unknown",
    ...(context.service && allowedServices.has(context.service)
      ? { service: context.service }
      : {}),
  };
  window.dispatchEvent(
    new CustomEvent("alfa:interaction", { detail: { event, ...safeContext } }),
  );
}
