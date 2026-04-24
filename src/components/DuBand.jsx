import './DuBand.css'

function BandContent() {
  return (
    <div>
      <span>Cretan olive, Indian kitchen</span>
      <span className="mark">◆</span>
      <span className="deva">क्रीट से मुंबई तक</span>
      <span className="mark">◆</span>
      <span>Koroneiki · single estate</span>
      <span className="mark">◆</span>
      <span>Cold-pressed · 4 hours</span>
      <span className="mark">◆</span>
      <span className="deva">शुद्ध · एकल उत्पत्ति</span>
      <span className="mark">◆</span>
      <span>Harvest 2025</span>
      <span className="mark">◆</span>
    </div>
  )
}

export default function DuBand() {
  return (
    <div className="du-band">
      <div className="du-band-inner">
        <BandContent />
        <BandContent />
      </div>
    </div>
  )
}
