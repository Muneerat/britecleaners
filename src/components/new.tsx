
// "use server";

// import { EmailTemplate } from '@/components/email-template';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// type SendEmailResult = {
//   success: boolean;
//   message: string;
//   data?: any; // Optional: include data for success cases
// };

// export async function SendEmail() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['oladipomunirat@gmail.com'],
//       subject: 'Hello world',
//       react: EmailTemplate({ firstName: 'John' }),
//     });

//      if (error) {
//       console.error('Error sending email:', error);
//       // Return a plain JavaScript object for an error case
//       return { 
//         success: false, 
//         message: 'Failed to send email.', 
//         data: error 
//       };
//     }
//      return { 
//       success: true, 
//       message: 'Email sent successfully!', 
//       data: data 
//     };

// console.log(Response.json(data));
//     return Response.json(data);
//   } catch (error) {
//     console.error('Unexpected error:', error);
//      return { 
//       success: false, 
//       message: 'An unknown server error occurred.',
//     };
//   }
// }

"use server";

// import { EmailTemplate } from '@/components/email-template';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// type SendEmailResult = {
//   success: boolean;
//   message: string;
// };

// // The function MUST accept FormData when used with the form action attribute
// export async function SendEmail(formData: FormData): Promise<SendEmailResult> {
//   // Extract form values
//   console.log(formData,"FormData received:", );
//   const fullname = formData.get('fullname') as string;
//   const phone = formData.get('phone') as string;
//   const email = formData.get('email') as string;
//   const enquiryType = formData.get('enquiryType') as string;
//   const message = formData.get('message') as string;

//   // Basic validation
//   if (!fullname || !email || !message) {
//     return { 
//       success: false, 
//       message: 'Please fill in the Fullname, Email, and Message fields.' 
//     };
//   }

//   // Combine data for the email body
//   const body = `
//     Fullname: ${fullname}
//     Phone: ${phone}
//     Email: ${email}
//     Enquiry Type: ${enquiryType}
//     Message: ${message}
//   `;

//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>', // Change this to your verified sender
//       to: ['oladipomunirat@gmail.com'], // Change this to your team's recipient email
//       subject: `New Enquiry: ${enquiryType} from ${fullname}`,
//       // Use the 'text' property for a simple text email, or update EmailTemplate
//       react: EmailTemplate({ 
//         fullname, 
//         phone, 
//         email, 
//         postcode, 
//         enquiryType, 
//         message 
//       }),
//     });

//     if (error) {
//       console.error("Resend API Error:", error);
//       return { 
//         success: false, 
//         message: 'Email failed to send. Please check the server logs for API errors.' 
//       };
//     }
    
//     return { 
//       success: true, 
//       message: 'Your message has been sent successfully!' 
//     };

//   } catch (error) {
//     console.error("Server Action Catch Block Error:", error);
//     return { 
//       success: false, 
//       message: 'An unexpected server error occurred. Please try again later.' 
//     };
//   }
// }

"use server";

import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { render } from '@react-email/render'; 

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailResult = {
  success: boolean;
  message: string;
};

// 🌟 CRITICAL FIX: The function must accept prevState as the first argument 🌟
export async function SendEmail(prevState: SendEmailResult, formData: FormData): Promise<SendEmailResult> {
  // Now formData is guaranteed to be the correct FormData object during submission

  // Extract data using the 'name' attributes defined in From.tsx
  const fullname = formData.get('fullname') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const postcode = formData.get('postcode') as string;
  const enquiryType = formData.get('enquiryType') as string;
  const message = formData.get('message') as string;

  // Basic validation
  if (!fullname || !email || !message) {
    return { 
      success: false, 
      message: 'Validation Error: Please fill in Fullname, Email, and Message.' 
    };
  }
  
  try {
    const emailHtml = render(EmailTemplate({ 
        fullname, 
        phone, 
        email, 
        postcode, 
        enquiryType, 
        message 
    }));

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', 
      to: ['oladipomunirat@gmail.com'], 
      subject: `New Enquiry: ${enquiryType} from ${fullname}`,
       react: EmailTemplate({ 
        fullname, 
        phone, 
        email, 
        postcode, 
        enquiryType, 
        message 
      }),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { 
        success: false, 
        message: 'Email failed to send. Check server logs for API errors.' 
      };
    }
    
    return { 
      success: true, 
      message: `Success! Your message has been sent.` 
    };

  } catch (error) {
    console.error("Server Action Catch Block Error:", error);
    return { 
      success: false, 
      message: 'An unexpected server error occurred. Please try again later.' 
    };
  }
}
