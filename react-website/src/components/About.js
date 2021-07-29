import californian from "../assets/californian.jpg";
import programming from "../assets/programming.jpg";
import cats from "../assets/cats.jpg";

function About() {
  return (
    <section id="about" class="bg-gray-300 pt-10">
      <h2 class="text-center text-xl font-bold underline text-gray-900">
        Wanna Learn More About Me?
      </h2>
      <ul class="grid p-10 gap-10 md:grid-cols-3">
        <li class="bg-white shadow rounded-lg overflow-hidden">
          <img src={californian} class="w-fill" />
          <div class="p-4">
            <h3 class="font-bold">Californian</h3>
            <p>
              While born in Indiana, I've lived in California for most of my
              life!
            </p>
          </div>
        </li>
        <li class="bg-white shadow rounded-lg overflow-hidden">
          <img src={programming} class="w-full" />
          <div class="p-4">
            <h3 class="font-bold">Programming</h3>
            <p>
              I really enjoy the problem solving process involved in
              programming!
            </p>
          </div>
        </li>
        <li class="bg-white shadow rounded-lg overflow-hidden">
          <img src={cats} class="w-full" />
          <div class="p-4">
            <h3 class="font-bold">Cats</h3>
            <p>I have two cats; both are adorable!</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default About;
