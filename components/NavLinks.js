import Link from "next/link";
import ActiveLink from "./utils/ActiveLink";

const NavLinks = (props) => {
  return (
    <>
      <ActiveLink
        partialMatch={true}
        activeClassName={`bg-white text-intoprofits-blue ${props.class}`}
        href="/results"
      >
        <a className={`${props.class}`}>Client Results</a>
      </ActiveLink>

      <ActiveLink
        partialMatch={true}
        activeClassName={`bg-white text-intoprofits-blue ${props.class}`}
        href="/channel"
      >
        <a className={`${props.class}`}>Channel</a>
      </ActiveLink>
      <ActiveLink
        activeClassName={`bg-white text-intoprofits-blue ${props.class}`}
        href="/about"
      >
        <a className={`${props.class}`}>About</a>
      </ActiveLink>
      <a href="/case-study" className={`${props.class}`}>
        Free Case Study
      </a>
    </>
  );
};

export default NavLinks;
