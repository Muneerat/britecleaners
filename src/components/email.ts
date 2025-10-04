"use server"
import { Resend } from 'resend';
import { EmailTemplate } from './email-template';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

type SendEmailResult = {
  success: boolean;
  message: string;
};

export async function SendEmail(formData: FormData): Promise<SendEmailResult> {
 
  
  
  const fullname = formData.get('fullname') as string;
  const phone = formData.get('phone-number') as string; 
  const email = formData.get('email') as string;
  const enquiryType = formData.get('enquiry-type') as string; 
  const message = formData.get('message') as string;


  if (!fullname || !email || !message) {
    return { 
      success: false, 
      message: 'Please fill in the Fullname, Email, and Message fields.' 
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      //  from: 'Acme <info@britecleaners.co.uk>',
      from: `Britecleaners <info@britecleaners.co.uk>`, 
      to: ['info@britecleaners.co.uk'],
      subject: `New Enquiry: ${enquiryType} from ${fullname}`,
      replyTo: email, 
      react: EmailTemplate({ 
        fullname, 
        phone, 
        email, 
        enquiryType, 
        message 
      }),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { 
        success: false, 
        message: 'Email failed to send. Try again' 
      };
    }
    
    return { 
      success: true, 
      message: 'Your message has been sent successfully!' 
    };

  } catch (error) {
    console.error("Server Action Catch Block Error:", error);
    return { 
      success: false, 
      message: 'An unexpected server error occurred. Please try again later.' 
    };
  }
}