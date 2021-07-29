import Link from "./Link";
import kaden from "../assets/kaden.jpg";

const Buttons = () => {
  return (
    <div className="border-t-8 border-b-8 border-black bg-grey p-20 flex grid gap-6 justify-items-center">
      <h1 class="text-4xl text-black text-center grid place-items-center">
        Connect with Me?
      </h1>
      <img
        src={kaden}
        class="w-1/4 h-auto mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
      />
      <div class="gap-6 flex place-items-center flex-row-reverse">
        <Link
          url="https://www.linkedin.com/in/kaden-rettig-a26186196/"
          name="LinkedIn"
          class="p-24"
        ></Link>
        <Link
          url="https://github.com/kadenrettig"
          name="GitHub"
          class="p-24"
        ></Link>
      </div>
    </div>
  );
};

export default Buttons;
