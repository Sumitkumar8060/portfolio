// A reusable button. Use it for calls to action like "View Projects".
//
// Props:
//   children  - the text inside the button
//   href      - if provided, renders a link (<a>); otherwise a <button>
//   variant   - 'primary' (default) or 'secondary'
//   external  - if true, the link opens in a new tab
//   type      - for real buttons: 'button' (default) or 'submit'
//   onClick   - function to run when a real button is clicked

function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  type = 'button',
  onClick,
}) {
  const className = `btn btn--${variant}`

  // Case 1: it's a link
  if (href) {
    // Only add these attributes when the link opens in a new tab
    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

    return (
      <a href={href} className={className} {...externalProps}>
        {children}
      </a>
    )
  }

  // Case 2: it's a real button (for actions, like submitting a form)
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button