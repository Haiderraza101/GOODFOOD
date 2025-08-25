
import BurgerMenu from "./BurgerMenu"
import KebabMenu from "./KebabMenu"
import PizzaMenu from "./PizzaMenu"

export default function Menu() {

  return (
    <div>
      <div className=" pt-4  text-center text-gray-600 font-bold text-2xl">
        Menu
      </div>

      <div className=" flex gap-6 lg:gap-2 p-3 sm:p-5 flex-wrap items-center justify-center lg:ml-4 ">
        <div>
         <BurgerMenu/>
            </div>

            <div>
         <PizzaMenu/>
            </div>

            <div>
         <KebabMenu/>
            </div>
      </div>
    </div>
  )
}
