"use client";
import { useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { company, content, services, whatsappUrl } from "../site-content";
import { recordInteraction } from "../measurement";

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function ContactForm() {
  const hydrated = useSyncExternalStore(
    subscribe,
    clientSnapshot,
    serverSnapshot,
  );
  const [preparedUrl, setPreparedUrl] = useState("");
  const started = useRef(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        "input, textarea",
      ),
    );
    for (const field of fields) {
      field.setCustomValidity(
        field.value.trim().length < (field.minLength || 1)
          ? `Preencha este campo com pelo menos ${field.minLength || 1} caracteres, sem contar os espaços nas extremidades.`
          : "",
      );
      if (!field.reportValidity()) return;
    }
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const read = (key: string) => String(data.get(key) || "").trim();
    const serviceId = read("service");
    const selectedService = services.find(
      (service) => service.id === serviceId,
    );
    const serviceName = selectedService?.title ?? "Outra demanda de engenharia";
    const message = `Olá, Alfa Engenharia! Gostaria de apresentar uma demanda da minha empresa.\n\nNome: ${read("name")}\nEmpresa: ${read("company")}\nCidade: ${read("city")}\nServiço de interesse: ${serviceName}\n\nDescrição da necessidade:\n${read("description")}`;
    const url = whatsappUrl(message);
    setPreparedUrl(url);
    recordInteraction("form_whatsapp_open", {
      location: "contact-form",
      service: selectedService?.id ?? "outro",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="form-panel" data-reveal>
      <div className="form-heading">
        <span className="eyebrow">Apresente sua demanda</span>
        <span>Todos os campos são obrigatórios.</span>
      </div>
      <form
        onSubmit={handleSubmit}
        onFocus={() => {
          if (!started.current) {
            started.current = true;
            recordInteraction("form_start", { location: "contact-form" });
          }
        }}
        onInput={(event) => {
          const field = event.target;
          if (
            field instanceof HTMLInputElement ||
            field instanceof HTMLTextAreaElement
          )
            field.setCustomValidity("");
          if (preparedUrl) setPreparedUrl("");
        }}
      >
        <fieldset disabled={!hydrated}>
          <legend className="sr-only">Dados da sua empresa e da demanda</legend>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="contact-name">Nome</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                placeholder="Como podemos chamar você?"
                required
                minLength={2}
                maxLength={80}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-company">Empresa</label>
              <input
                id="contact-company"
                name="company"
                autoComplete="organization"
                placeholder="Nome da empresa"
                required
                minLength={2}
                maxLength={120}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-city">Cidade</label>
              <input
                id="contact-city"
                name="city"
                autoComplete="address-level2"
                placeholder="Cidade da demanda"
                required
                minLength={2}
                maxLength={100}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-service">Serviço de interesse</label>
              <select
                id="contact-service"
                name="service"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione um serviço
                </option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
                <option value="outro">Outra demanda de engenharia</option>
              </select>
            </div>
            <div className="field field-wide">
              <label htmlFor="contact-description">
                Descrição da necessidade
              </label>
              <textarea
                id="contact-description"
                name="description"
                rows={4}
                required
                minLength={10}
                maxLength={1200}
                placeholder="Descreva o serviço, o local e o que sua empresa precisa."
                aria-describedby="description-hint"
              />
              <span id="description-hint" className="field-hint">
                Não inclua informações sigilosas ou dados de terceiros.
              </span>
            </div>
          </div>
          <button className="button form-button" type="submit">
            Continuar no WhatsApp <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note">{content.contact.formNote}</p>
        </fieldset>
      </form>
      <div className="form-status" role="status" aria-live="polite">
        {preparedUrl ? (
          <>
            <p>Mensagem preparada para sua conferência.</p>
            <a href={preparedUrl} target="_blank" rel="noopener noreferrer">
              Se o WhatsApp não abriu, clique aqui para continuar ↗
            </a>
          </>
        ) : null}
      </div>
      <noscript>
        <p className="noscript-note">
          Para preparar a mensagem pelo formulário, habilite o JavaScript. Você
          também pode{" "}
          <a href={company.whatsapp} target="_blank" rel="noopener noreferrer">
            falar diretamente pelo WhatsApp
          </a>{" "}
          ou usar nosso e-mail.
        </p>
      </noscript>
    </div>
  );
}
