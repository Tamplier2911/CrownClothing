// import "./ContactsPage.scss";
import React from "react";

import { ContactsContainer, ContactsParagraph } from "./ContactsPageStyles";

export const ContactsPage = () => {
  return (
    <ContactsContainer>
      <ContactsParagraph>Artem Nikolaiev</ContactsParagraph>
      <ContactsParagraph>Phone: +380*********</ContactsParagraph>
      <ContactsParagraph>Email: artyom.nikolaev@yahoo.com</ContactsParagraph>
    </ContactsContainer>
  );
};

export default ContactsPage;
