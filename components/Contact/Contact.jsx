import ContactForm from "./ContactForm";
import SayHello from "./SayHello";

const Contact = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 md:px-8 lg:px-15 pb-10">
      <SayHello />
      <ContactForm />
    </div>
  );
};

export default Contact;
