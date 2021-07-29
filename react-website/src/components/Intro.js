import kaden from "../assets/kaden.jpg";

function Intro() {
  return (
    <div
      id="hero"
      class="h-screen bg-green-400 text-white text-center grid place-items-center"
    >
      <h2 class="text-4xl font-bold italic uppercase tracking-wider p-20">
        Hey There!{" "}
      </h2>
      <h1 class="font-bold font-serif text-8xl leading-none">
        So uhhh..What's Up?
      </h1>
      <p class="font-mono font-bold pt-10 text-lg">
        Computer Scientist • From Gilroy, California
      </p>
      <br />
      <div class="md:p-0 grid justify-items-center bg-green-600 backdrop-filter backdrop-blur">
        <img
          class="w-1/4"
          src={kaden}
          //style="display:block;"
        />
        <p class="text-xl ">
          {" "}
          Interested in Connecting with Me?
          <a href="https://www.linkedin.com/in/kaden-rettig-a26186196/">
            {" "}
            Click Here!
          </a>
        </p>
      </div>

      <br />
    </div>
  );
}

export default Intro;
