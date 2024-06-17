import { Button } from "@/components/ui/button";
import { Icon } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="p-10 ">
      <div className="grid grid-cols-3 py-10">
        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>

          <ul>
            <li>
              <Link href="/support">Help Center</Link>
            </li>
            <li>
              <Link href="/#faq">FAQ</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <Link href="https://twitter.com" target="_blank">
            {/* <Icon /> */}
          </Link>
          <Link href="https://facebook.com" target="_blank">
            {/* <Icon name="facebook" /> */}
          </Link>
          <Link href="https://instagram.com" target="_blank">
            {/* <Icon name="instagram" /> */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
