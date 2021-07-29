import kaden from "../assets/kaden.jpg";
import iris from "../assets/iris.jpg";
import avocado from "../assets/avocado.jpg";

function Staff() {
  return (
    <section
      id="tech-support"
      class="border-t-8 border-b-8 border-black text-gray-600 body-font"
    >
      <h1 class="text-black underline font-bold grid text-center text-4xl p-20">
        Our Team
      </h1>
      <div class="container px-5 py-10 m-auto">
        <div class="flex grid grid-cols-3 justify-center place-items-center">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-auto h-auto mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={kaden}
              />
              <br />
              <span class="inline-block h-1 w-10 rounded bg-purple-300 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Kaden Rettig
              </h2>
              <p class="text-gray-500">Website Designer</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-auto h-auto mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={iris}
              />
              <br />
              <span class="inline-block h-1 w-10 rounded bg-purple-300 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Iris
              </h2>
              <p class="text-gray-500">Assistant Website Designer</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-auto h-auto mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={avocado}
              />
              <br />
              <span class="inline-block h-1 w-10 rounded bg-purple-300 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Avocado
              </h2>
              <p class="text-gray-500">CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Staff;
