
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";


// export default function CancelPage() {
//     const searchParams = useSearchParams();
//     const returnUrl = searchParams.get("returnUrl") || "/"; // Default to home if no returnUrl

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen -pt-10 bg-red-100">
//             <h1 className="text-3xl font-bold text-red-600">Payment Canceled ❌</h1>
//             <p className="text-gray-600 mt-2">Your payment was not completed. You can try again or go back.</p>

//             <Link href={'/'} className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800">
//                 Go Back
//             </Link>
          

//         </div>
       
//     );
// }
import Link from "next/link";

export default function CancelPage() {
    return (
      <div className="mt-4">
        <div className=" text-center">
          <h1 className="text-3xl font-bold text-red-600">Payment Canceled</h1>
          <p className="mt-4 text-lg">It seems you canceled the payment.</p>
          <Link href="/" className="mt-4 text-blue-500 font-md py-2 px-6 rounded-md">
            Go Back to Shop
          </Link>
        </div>
     
      </div>
    );
  }
  