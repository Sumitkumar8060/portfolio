// A consistent heading for each section of the page.
//
// Props:
//   title     - the heading text, e.g. "Projects"
//   subtitle  - optional short line under the heading

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2 className="section-title__heading">{title}</h2>

      {/* Only render the subtitle if one was provided */}
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle