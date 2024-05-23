

export default function Content(prop) {
  return (
    <div className="flex gap-7 md:gap-3 w-80">
        <img className="w-10 h-10"src={prop.image} />
        <div className="flex flex-col gap-9">
            <h2 className="text-1xl">{prop.heading}</h2>
            <p> {prop.content}</p>
        </div>
    </div>
  )
}
