
export function sectionTagLine(text, color) {
  return (
    <>
      <div className={"uppercase font-bold text-xl text-" + color}>
        {text}  <span className="-tracking-4" >——————</span>
      </div>
    </>
  )
}