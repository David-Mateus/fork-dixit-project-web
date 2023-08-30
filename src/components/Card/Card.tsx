import Image from "next/image";
export default function Card(props) {
  return (
    <>
      <div>
        <a href={props.link}>
          <Image
            src={props.photo}
            width={900}
            height={900}
            className="object-cover w-80 h-96"
            alt=""
          />
        </a>
      </div>
    </>
  );
}
