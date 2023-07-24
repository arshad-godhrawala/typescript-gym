import Logo from "@/assets/Logo.png";

type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({}: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="footer-logo" />
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            reiciendis ex delectus est officiis? Quidem, odit sed!
            Exercitationem quisquam repellendus aut quaerat perspiciatis nulla
            laborum labore, dignissimos praesentium necessitatibus
            reprehenderit.
          </p>
          <p>© Evogym All Rights reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            sit amet consectetur adipisicing elit. Reiciendis, est.
          </p>
          <p className="my-5">Lorem, ipsum dolor sit amet Reiciendis, est.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            sit amet consectetur adipisicing elit. Reiciendis, est.
          </p>
          <p>(333)635-8733</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
