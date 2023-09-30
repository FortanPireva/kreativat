import React from "react";

interface SocialMediaLink {
  name: string;
  url: string;
}

interface FooterLink {
  name: string;
  url: string;
}

interface ExternalLinks {
  title: string;
  links: {
    name: string;
    url: string;
  }[];
}
interface FooterProps {
  company: string;
  year: number;
  links: FooterLink[];
  socialMediaLinks: SocialMediaLink[];
  externalLinks: ExternalLinks[];
}

const Footer: React.FC<FooterProps> = ({
  company,
  year,
  links,
  socialMediaLinks,
  externalLinks,
}) => {
  return (
    <footer className="w-full bg-black  overflow-hidden  text-white  pt-16 pb-12 px-4 justify-center items-center flex flex-col ">
      <div className="container mx-auto grid grid-cols-12  ">
        <div className="col-span-12 xl:col-span-6  flex flex-col max-w-sm justify-start items-start">
          <h1 className="text-4xl font-bold mb-8  max-w-sm ">KREATIVAT</h1>
          <p className="max-w-sm text-left w-10/12">
            Platformë për promovimin e punëve kreative e inovative të të rinjve
            shqiptarë nga Kosova.
          </p>
          <p className="mt-5 max-w-sm">
            Adresa: <br /> Veternik, Lagja Gizzi Rr.Rumiu
          </p>
        </div>
        <div className="links-container grid grid-cols-12 mt-20 col-span-12 xl:col-span-6 justify-start gap-y-20">
          {externalLinks.map((eLink) => {
            return (
              <ul
                key={eLink.title}
                className="col-span-6 md:col-span-6 lg:col-span-3 flex flex-col justify-start items-start max-w-sm"
              >
                <li className="first text-xl font-bold mb-6">{eLink.title}</li>
                {eLink.links.map((link) => {
                  return (
                    <li key={link.url} className="my-3">
                      <a href={link.url}>{link.name}</a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between uppercase text-sm mt-20 w-full">
        <p>Privacy policy</p>
        <p>info@kreativat.com</p>
      </div>
    </footer>
  );
};

export default Footer;
