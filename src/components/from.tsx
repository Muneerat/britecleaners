// "use client"
// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Button } from "./ui/button";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { SendEmail } from "@/app/api/route";

// export default function From() {
//     // const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
//     // e.preventDefault();
//     // SendEmail()
//     // }
//     //    function sendEmail(){

//     // SendEmail()
//     // }
//   return (
//     <Card className="shadow-lg h-full w-full">
//       <CardHeader>
//         <CardTitle>Enquire about our services</CardTitle>
//         <CardDescription>
//           Simply leave your name and a form of contact, and we&#39;ll get back to
//           you as soon as possible.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="first-name">Fullname</Label>
//             <Input id="fullname" placeholder="Enter your fullname" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="last-name">Phone number</Label>
//             <Input id="phone-number" placeholder="Enter your phone number" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" type="email" placeholder="Enter your email" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Enquiry type?</Label>
//             <select className="w-full border rounded-md px-3 py-2" id="email">
//               <option>General enquiry</option>
//               <option>Request a call back</option>
//               <option>Book a service</option>
//               <option>Other</option>
//             </select>
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="message">Message</Label>
//             <Textarea
//               id="message"
//               placeholder="How can we help you?"
//               className="min-h-[120px]"
//             />
//           </div>
//           <Button type="submit" className="w-full bg-[#2a92e6]">
//             Send Message
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }
"use client"
import React, { useState } from "react"; // Import useState
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { SendEmail } from "./email";
import { useFormStatus } from "react-dom";
// 1. Import the Server Action

// Helper component to show loading and result state
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button 
      type="submit" 
      className="w-full bg-[#2a92e6]" 
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}


export default function Form() {
  // State to handle the result message from the Server Action
  const [resultMessage, setResultMessage] = useState<{ 
    success: boolean | null, 
    message: string 
  }>({ success: null, message: '' });

  // Wrapper function to handle the Server Action result
  const formAction = async (formData: FormData) => {
    // 3. Call the Server Action
    const result = await SendEmail(formData);
    
    // Set the result message in state
    setResultMessage(result);

    // Optional: Clear the form on success
    if (result.success) {
        // You'd typically use useRef or control the inputs to clear them.
        // For simplicity here, we rely on a full form reset if needed.
    }
  }

  return (
    <Card className="shadow-lg h-full w-full text-[#6b6b78]">
      <CardHeader>
        <CardTitle className="text-[#6b6b78]">Enquire about our services</CardTitle>
        <CardDescription>
          Simply leave your name and a form of contact, and we&#39;ll get back to
          you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* 2. Add the action attribute pointing to the Server Action */}
        <form className="space-y-4" action={formAction}>
          <div className="space-y-2">
            <Label htmlFor="fullname">Fullname</Label>
            {/* 4. Add the 'name' attribute */}
            <Input id="fullname" name="fullname" placeholder="Enter your fullname" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone-number">Phone number</Label>
            {/* 4. Add the 'name' attribute */}
            <Input id="phone-number" name="phone-number" placeholder="Enter your phone number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            {/* 4. Add the 'name' attribute */}
            <Input id="email" name="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="enquiry-type">Enquiry type?</Label>
            {/* 4. Add the 'name' attribute, and update the ID */}
            <select className="w-full border rounded-md px-3 py-2" id="enquiry-type" name="enquiry-type">
              <option value="General enquiry">General enquiry</option>
              <option value="Request a call back">Request a call back</option>
              <option value="Book a service">Book a service</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            {/* 4. Add the 'name' attribute */}
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              className="min-h-[120px]"
            />
          </div>
          
          <SubmitButton />
          
          {/* Display feedback to the user */}
          {resultMessage.message && (
            <p className={`text-sm ${resultMessage.success ? 'text-green-600' : 'text-red-600'}`}>
              {resultMessage.message}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

// "use client";
// import React, { useActionState, useEffect } from "react";
// // 1. Import useActionState and useFormStatus
// import {  useFormStatus } from "react-dom";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Button } from "./ui/button";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { SendEmail } from "@/app/api/route";

// // Define initial state for useActionState
// const initialState = {
//   success: false,
//   message: "",
// };

// // --- Helper Component for Submit Button ---
// function SubmitButton() {
//   const { pending } = useFormStatus();

//   return (
//     <Button type="submit" className="w-full bg-[#2a92e6]" disabled={pending}>
//       {pending ? "Sending..." : "Send Message"}
//     </Button>
//   );
// }

// // --- Main Form Component ---
// export default function From() {
//   // 2. Use useActionState to link the form state to the Server Action (SendEmail)
//   const [state, formAction] = useActionState(SendEmail as any, initialState);

//   // Effect to reset the form on success and show a temporary success message
//   useEffect(() => {
//     if (state.success) {
//       // Logic to clear form fields or show a modal can go here
//       // For this example, we just log and the message handles the feedback.
//       console.log("Email sent successfully!");
//     }
//   }, [state.success]);

//   return (
//     <Card className="shadow-lg h-full w-full max-w-lg mx-auto my-8" data-aos="flip-left">
//       <CardHeader>
//         <CardTitle>Enquire about our services</CardTitle>
//         <CardDescription>
//           Simply leave your name and a form of contact, and we'll get back to
//           you as soon as possible.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         {/* 3. Use formAction directly in the action prop */}
//         <form className="space-y-4" action={formAction}>
          
//           <div className="space-y-2">
//             <Label htmlFor="fullname">Fullname</Label>
//             {/* 4. MUST have 'name' attribute to collect data */}
//             <Input name="fullname" id="fullname" placeholder="Enter your fullname" required />
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="phone">Phone number</Label>
//             <Input name="phone" id="phone" placeholder="Enter your phone number" />
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="email-input">Email</Label>
//             {/* 4. MUST have 'name' attribute, fixed duplicate ID issue */}
//             <Input name="email" id="email-input" type="email" placeholder="Enter your email" required />
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="postcode">Postcode</Label>
//             {/* 4. MUST have 'name' attribute, fixed duplicate ID issue */}
//             <Input name="postcode" id="postcode" placeholder="Enter your postcode" />
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="enquiryType">Enquiry type?</Label>
//             {/* 4. MUST have 'name' attribute, fixed duplicate ID issue */}
//             <select name="enquiryType" className="w-full border rounded-md px-3 py-2" id="enquiryType">
//               <option>General enquiry</option>
//               <option>Request a call back</option>
//               <option>Book a service</option>
//               <option>Other</option>
//             </select>
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="message">Message</Label>
//             {/* 4. MUST have 'name' attribute */}
//             <Textarea
//               name="message"
//               id="message"
//               placeholder="How can we help you?"
//               className="min-h-[120px]"
//               required
//             />
//           </div>
          
//           <SubmitButton />
          
//           {/* 5. Display the result message */}
//           {state.message && (
//             <p className={`text-sm font-semibold p-2 rounded-md ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//               {state.message}
//             </p>
//           )}
//         </form>
//       </CardContent>
//     </Card>
//   );
// }


