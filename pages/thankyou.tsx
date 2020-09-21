import React from "react";
import Link from "next/link";

export default function ThankYou() {
  return (
    <React.Fragment>
      <h1>Thank you!</h1>
      <p>Your submission has been received</p>
      <Link href="/">
        <a>Back to our site</a>
      </Link>
    </React.Fragment>
  );
}
