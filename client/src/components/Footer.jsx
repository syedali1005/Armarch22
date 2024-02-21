import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-yellow-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 rounded-md text-white">
                Armarch
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Armarch
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/sahandghavidel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">LinkedIn</Footer.Link>
                <Footer.Link href="#">Youtube</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Armarch"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsYoutube} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
