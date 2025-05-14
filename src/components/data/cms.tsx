import Image from "next/image";

export type ContentManagementSystem = {
    photos: string;
    date: string;
    category: string;
    title: string;
    description: string;
}

export const contentmanagementsystem: ContentManagementSystem[] = [
    {
        photos: "public/CMS/CMS-1.svg",
        date: "April 28, 2025",
        category: "Product",
        title: "How to Choose the Right CRM for Your Personal and Business",
        description: "Not all CRMs are created equal. Here’s how to pick the best one for your needs."
    },
    {
        photos: "public/CMS/CMS-2.svg",
        date: "April 26, 2025",
        category: "Companies",
        title: "The Future of CRM: Trends to Now Companies Watch in 2025",
        description: "Stay ahead of the game with the latest trends shaping customer relationship tools."
    },
    {
        photos: "public/CMS/CMS-3.svg",
        date: "April 24, 2025",
        category: "Customers",
        title: "How Sales Teams Use CRM to Close Deals with Customers",
        description: "Not all CRMs are created equal. Here’s how to pick the best one for your needs."
    },
    {
        photos: "public/CMS/CMS-4.svg",
        date: "April 22, 2025",
        category: "Product",
        title: "CRM 101: A Beginner’s Guide to Customer Relationship Team",
        description: "New to CRM? Here's a quick guide to what it is, how it works, and why it matters."
    },
    {
        photos: "public/CMS/CMS-5.svg",
        date: "April 20, 2025",
        category: "Companies",
        title: "CRM for Best Marketing Teams What You Need to Fast Know",
        description: "See how marketing can use CRM to improve targeting, timing, and tracking."
    },
    {
        photos: "public/CMS/CMS-6.svg",
        date: "April 18, 2025",
        category: "Customers",
        title: "How Founders Use CRM to Stay Close to Good Value Customers",
        description: "Tips for startup founders to use CRM for building lasting relationships."
    },
    {
        photos: "public/CMS/CMS-7.svg",
        date: "April 10, 2025",
        category: "Product",
        title: "How to Clean Your CRM Data (Without the Headache More)",
        description: "Keep your CRM accurate and useful with easy data-cleaning tips."
    },
    {
        photos: "public/CMS/CMS-8.svg",
        date: "April 10, 2025",
        category: "Companies",
        title: "See Real-Life CRM Setups from Good Modern Pipeliner Teams",
        description: "Inspiration from how real startups and companies set up and use their CRMs."
    },
    {
        photos: "public/CMS/CMS-9.svg",
        date: "April 10, 2025",
        category: "Customers",
        title: "Customer Success and CRM: A Perfect Match with Piperliner",
        description: "See how CS teams use CRM to proactively support and retain customers."
    },
]

export default function CMS() {
    return (
        <div className="w-300 px-15 py-12 justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            {contentmanagementsystem.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <img src={item.photos.replace('public/', '/')} alt={item.title} className="rounded-lg w-full h-52 object-cover" />
                <div className="text-sm text-gray-500">{item.date} • {item.category}</div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}