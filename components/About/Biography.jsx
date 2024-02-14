import ScrollSVG from "./ScrollSVG";
import SignatureSVG from "./SignatureSVG";

const Biography = () => {
  return (
    <div className="flex flex-col gap-12 justify-center">
      <h2 className="font-bold text-2xl">BIOGRAPHY</h2>
      <p className="text-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
        repudiandae ducimus ratione illo adipisci? Ipsa doloremque consequatur
        asperiores vero alias nam ullam commodi id! Autem ratione tenetur
        officia omnis architecto.
      </p>

      <span className="italic">
        &quot;You can never understand everything. But you should push yourself
        to understand the system.&quot;
      </span>

      <SignatureSVG />
      {/* <ScrollSVG /> */}
    </div>
  );
};

export default Biography;
