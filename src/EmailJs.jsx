import emailjs from "emailjs-com";

export const sendEmail = (formRef) => {
  return emailjs.sendForm(
    "service_2trafny",      // Your Service ID
    "template_dibr38v",     // Your Template ID
    formRef.current,        // Form reference
    "VQu7cSkG7CZknQexa"     // Your Public Key
  );
};