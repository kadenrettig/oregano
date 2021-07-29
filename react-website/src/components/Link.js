const Link = (props) => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="md:justify-items-center bg-green-500 rounded-lg px-8 py-4 inline-block text-black"
    >
      {props.name}
    </a>
  );
};

export default Link;
