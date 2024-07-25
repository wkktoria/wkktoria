function ContactItem({ href, iconId, iconClass, label }) {
  return (
    <a
      role="button"
      className="contact-item btn border border-dark px-3"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <i
          id={iconId === null ? "" : iconId}
          className={`${iconClass} contact-icon`}
        ></i>
        <span>{label}</span>
      </div>
    </a>
  );
}

export default ContactItem;
