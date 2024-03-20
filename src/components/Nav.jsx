import TwitterIcon from "./TwitterIcon";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";

export default function Nav() {
  return (
    <nav className="header__nav">
        <a href="/" className="header__home">Moneeb</a>
        <GithubIcon />
        <LinkedinIcon />
        <TwitterIcon />
    </nav>
  );
}