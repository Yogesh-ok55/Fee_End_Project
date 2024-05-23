import "../../CSS/Services.css"
import "../components/Content"
import Content from "../components/Content"
import item from "../components/Item"

export default function pages() {
  return (
    <div id="services" className="flex gap-5 flex-col pt-5 items-center lg:justify-center Service-page items-normal">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl">Service</h1>
        <h2 className="text-3xl">What I Do...</h2>
      </div>
      <div className="flex Lg:gap-3 md:gap-24 md:flex-row sm:flex-col sm:gap-5 flex-wrap justify-center items-center mb-5">
        {
         item.map((item)=>(
          <Content key={item.image}
          image={item.image}
          heading={item.heading}
          content={item.content}
          />
         ))
         }
      </div>
    </div>
  )
}
