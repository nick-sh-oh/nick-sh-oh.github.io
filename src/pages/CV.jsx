export default function CV() {
  return (
    <article className="page cv">
      <div className="cv-header">
        <div>
          <h1>Curriculum Vitae</h1>
          <p className="cv-updated">Last updated December 2025</p>
        </div>
        <a className="btn" href="/pdf/cv.pdf" target="_blank" rel="noopener noreferrer">
          Open / Download PDF ↗
        </a>
      </div>
      <div className="pdf-frame">
        <object data="/pdf/cv.pdf#view=FitH" type="application/pdf" width="100%" height="100%">
          <p>
            Your browser can’t display the embedded PDF.{' '}
            <a href="/pdf/cv.pdf" target="_blank" rel="noopener noreferrer">
              Open the CV in a new tab
            </a>
            .
          </p>
        </object>
      </div>
    </article>
  );
}
