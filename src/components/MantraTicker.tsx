const MANTRA_SEGMENT = (
  <>
    &nbsp; ✦ &nbsp; Hare Krishna Hare Krishna &bull; Krishna Krishna Hare Hare &bull; Hare Rama Hare Rama &bull; Rama
    Rama Hare Hare &nbsp; ✦ &nbsp; हरे कृष्ण हरे कृष्ण &bull; कृष्ण कृष्ण हरे हरे &bull; हरे राम हरे राम &bull; राम राम
    हरे हरे &nbsp; ✦ &nbsp; Hare Krishna Hare Krishna &bull; Krishna Krishna Hare Hare &bull; Hare Rama Hare Rama &bull;
    Rama Rama Hare Hare &nbsp; ✦ &nbsp;
  </>
);

export function MantraTicker() {
  return (
    <div className="mantra-ticker" aria-hidden="true">
      <div className="mantra-ticker__inner">
        {MANTRA_SEGMENT}
        {MANTRA_SEGMENT}
      </div>
    </div>
  );
}
