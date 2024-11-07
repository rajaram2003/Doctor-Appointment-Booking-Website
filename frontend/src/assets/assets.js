import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Richard provides comprehensive healthcare focused on preventive medicine, wellness, and general diagnosis to maintain overall health.',
        fees: 500,
        address: {
            line1: '23rd Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Emily specializes in diagnosing and treating gastrointestinal conditions with a patient-centered approach for digestive health.',
        fees: 600,
        address: {
            line1: '16th Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Sarah is dedicated to treating skin, hair, and nail conditions, offering both medical and cosmetic dermatology services.',
        fees: 300,
        address: {
            line1: '7th Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Christopher focuses on providing compassionate and specialized care to children, ensuring their healthy development.',
        fees: 400,
        address: {
            line1: '13th Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Jennifer treats complex neurological disorders with a focus on patient-centered care for a better quality of life.',
        fees: 500,
        address: {
            line1: '11th Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Andrew specializes in diagnosing and managing neurological conditions to enhance patient well-being and mental clarity.',
        fees: 500,
        address: {
            line1: '11th Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Christopher offers primary care services focused on preventive health, early diagnosis, and routine health management.',
        fees: 500,
        address: {
            line1: '23rd Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Timothy provides specialized care in women’s health, including preventive, diagnostic, and therapeutic gynecological services.',
        fees: 600,
        address: {
            line1: '19th Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Ava offers treatment for skin conditions, focusing on both medical dermatology and enhancing skin health and appearance.',
        fees: 300,
        address: {
            line1: '7th Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Jeffrey is committed to the health and wellness of children, offering comprehensive pediatric care.',
        fees: 400,
        address: {
            line1: '13th Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Zoe specializes in neurological care, providing diagnosis and treatment for various neurological disorders.',
        fees: 500,
        address: {
            line1: '11th Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Patrick offers expertise in treating digestive health issues, ensuring comfort and recovery for patients.',
        fees: 500,
        address: {
            line1: '16th Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Chloe provides primary care services, focusing on overall health and preventive medical care.',
        fees: 500,
        address: {
            line1: '23rd Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan is dedicated to women’s health, providing preventive care and specialized treatment in gynecology.',
        fees: 600,
        address: {
            line1: '19th Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Amelia provides a range of dermatological services, including treatment for skin conditions and cosmetic procedures.',
        fees: 300,
        address: {
            line1: '7th Avenue, Sahid Nagar',
            line2: 'Bhubaneswar, Odisha'
        }
    },
]   