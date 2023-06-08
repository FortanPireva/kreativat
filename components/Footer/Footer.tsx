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
    <footer className="w-full bg-black p-6 text-white  pt-32 justify-between gap-32 flex flex-col ">
      <div className="container mx-auto grid grid-cols-12 justify-center items-center gap-20">
        <div className="flex flex-col justify-around items-center w-full  max-w-lg gap-4 col-span-12 xl:col-span-6 text-center">
          <h1 className="text-4xl font-bold mb-8">KREATIVAT</h1>
          <p className="max-w-md">
            Platformë për promovimin e punëve kreative e inovative të të rinjve
            shqiptarë nga Kosova.
          </p>
          <p className="mt-5">
            Adresa: <br /> Veternik, Lagja Gizzi Rr.Rumiu
          </p>
        </div>
        <div className="links-container grid grid-cols-12 grid-rows-1 gap-14 col-span-12 xl:col-span-6 justify-start">
          {externalLinks.map((eLink) => {
            return (
              <ul
                key={eLink.title}
                className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-start items-center max-w-md"
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

      <div className="text-center text-sm mt-4">
        © {year} {company}. Të gjitha të drejtat e rezervuara.
      </div>
    </footer>
  );
};

export default Footer;
