// // Temporarily commented out to resolve TypeScript errors
// /*
// import { Checkbox } from '@/components/ui/checkbox';
// import { useOnboarding } from './onboarding-context';

// export function Step6Review() {
//   const { formData, updateFormData } = useOnboarding();

//   return (
//     <div className="space-y-8">
//       <div>
//         <h2 className="text-2xl font-bold text-gray-900">Review Your Information</h2>
//         <p className="mt-1 text-gray-600">Please review all the information you&apos;ve provided</p>
//       </div>

//       <div className="space-y-8">
//         {/* Practice Information */}
//         <div className="border-b pb-6">
//           <h3 className="text-lg font-medium text-gray-900 mb-4">Practice Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <p className="text-sm text-gray-500">Practice Name</p>
//               <p className="font-medium">{formData.practiceName || 'Not provided'}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Practice Type</p>
//               <p className="font-medium">{formData.practiceType || 'Not provided'}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">NPI Number</p>
//               <p className="font-mono">{formData.npiNumber || 'Not provided'}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Tax ID</p>
//               <p className="font-mono">{formData.taxId || 'Not provided'}</p>
//             </div>
//           </div>
//         </div>

//         {/* Contact Information */}
//         <div className="border-b pb-6">
//           <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <p className="text-sm text-gray-500">Email</p>
//               <p className="font-medium">{formData.email || 'Not provided'}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Phone</p>
//               <p className="font-medium">{formData.phone || 'Not provided'}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Website</p>
//               <p className="font-medium">{formData.website || 'Not provided'}</p>
//             </div>
//           </div>
//         </div>

//         {/* Address */}
//         <div className="border-b pb-6">
//           <h3 className="text-lg font-medium text-gray-900 mb-4">Practice Address</h3>
//           <div className="space-y-1">
//             <p className="font-medium">{formData.streetAddress || 'Not provided'}</p>
//             {formData.aptSuite && (
//               <p className="font-medium">{formData.aptSuite}</p>
//             )}
//             <p className="font-medium">
//               {formData.city && formData.state && formData.zipCode
//                 ? `${formData.city}, ${formData.state} ${formData.zipCode}`
//                 : 'Address not completed'}
//             </p>
//           </div>
//         </div>

//         {/* Services */}
//         {formData.services.length > 0 && (
//           <div className="border-b pb-6">
//             <h3 className="text-lg font-medium text-gray-900 mb-4">Services Offered</h3>
//             <div className="flex flex-wrap gap-2">
//               {formData.services.map((service: string, index: number) => (
//                 <span
//                   key={index}
//                   className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
//                 >
//                   {service}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Team Members */}
//         {formData.teamMembers.length > 0 && (
//           <div>
//             <h3 className="text-lg font-medium text-gray-900 mb-4">Team Members</h3>
//             <div className="space-y-3">
//               {formData.teamMembers.map((member: any, index: number) => (
//                 <div key={index} className="p-3 bg-gray-50 rounded-lg">
//                   <p className="font-medium">{member.name}</p>
//                   <p className="text-sm text-gray-600">{member.role}</p>
//                   <p className="text-sm text-gray-500">{member.email}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="pt-4">
//         <div className="flex items-start">
//           <div className="flex items-center h-5">
//             <Checkbox
//               id="terms"
//               checked={formData.termsAccepted}
//               onCheckedChange={(checked: boolean) => updateFormData({ termsAccepted: !!checked })}
//               className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//             />
//           </div>
//           <div className="ml-3 text-sm">
//             <label htmlFor="terms" className="font-medium text-gray-700">
//               I certify that all the information provided is accurate and complete.
//             </label>
//             <p className="text-gray-500">
//               By checking this box, you agree to our Terms of Service and Privacy Policy.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// */
