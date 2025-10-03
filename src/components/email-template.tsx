// import * as React from 'react';

// interface EmailTemplateProps {
//   firstName: string;
// }

// export function EmailTemplate({ firstName }: EmailTemplateProps) {
//   return (
//     <div>
//       <h1>Welcome, {firstName}!</h1>
//     </div>
//   );
// }

import * as React from 'react';
// Import essential React Email components
import { Html, Head, Body, Tailwind, Container, Heading, Text } from '@react-email/components';

interface EmailTemplateProps {
  // Update this interface to accept all the data you collect in your form
  fullname: string;
  phone: string;
  email: string;
  enquiryType: string;
  message: string;
}

// Update the function signature to accept all properties
export function EmailTemplate({ 
  fullname, 
  phone, 
  email, 
  enquiryType, 
  message 
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
  
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto p-4 bg-white shadow-lg rounded-lg border border-gray-200">
            
            <Heading className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">
              New Service Enquiry
            </Heading>

            <div className="space-y-4">
              <Text className="text-base text-gray-700">
                You have received a new enquiry of type **{enquiryType}**.
              </Text>
              
              <Text className="text-base font-semibold text-gray-800">
                Contact Details:
              </Text>
              
              <ul className="list-none p-0 m-0 space-y-1 text-sm text-gray-600">
                <li><span className="font-medium w-20 inline-block">Name:</span> {fullname}</li>
                <li><span className="font-medium w-20 inline-block">Email:</span> {email}</li>
                <li><span className="font-medium w-20 inline-block">Phone:</span> {phone}</li>
              </ul>

              <Heading as="h2" className="text-xl font-semibold text-gray-800 pt-4 border-t mt-4">
                Message:
              </Heading>
              
              <Text className="p-3 bg-gray-50 border border-gray-200 rounded-md whitespace-pre-line text-gray-700">
                {message}
              </Text>
            </div>
            

          </Container>
        </Body>
    </Html>
  );
}