import modelViewer from "@/images/projects/model-viewer.png";
import arAnimalCards from "@/images/projects/ar-animal-cards.png";
import bookManager from "@/images/projects/bookmark-manager.png";
import ecommerceProductPage from "@/images/projects/e-commerce-product-page.png";
import arabicOCR from "@/images/projects/arabic-ocr.png";

type Project = {
    link: string;
    title: string;
    imageAlt: string;
    imageSrc: string;
};

const projects: Project[] = [
    {
        link: "https://model-viewer-ahmed-0011.vercel.app",
        title: "3D Model Viewer",
        imageAlt: "Screenshot of 3D Model Viewer",
        imageSrc: modelViewer
    },
    {
        link: "https://ar-animal-cards.vercel.app",
        title: "Augmented reality experience for learning about animals",
        imageAlt: "Screenshot of Augment reality experience for learning about animals",
        imageSrc: arAnimalCards
    },
    {
        link: "h:tps://ahmed-0011.github.io/frontend-mentor-challenges/bookmark-manager-landing-page",
        title: "Bookmark Manager Landing Page",
        imageAlt: "Screenshot of Bookmark Manager Landing Page",
        imageSrc: bookManager
    },
    {
        link: "https://ahmed-0011.github.io/frontend-mentor-challenges/ecommerce-product-page",
        title: "Fully Responsive E-commerce Product Page",
        imageAlt: "Screenshot of Fully Responsive E-commerce Product Page",
        imageSrc: ecommerceProductPage
    },
    {
        link: "https://ahmed-0011.github.io/arabic-ocr",
        title: "Arabic OCR App",
        imageAlt: "Screenshot of Arabic OCR App",
        imageSrc: arabicOCR
    }
];

export default projects;
