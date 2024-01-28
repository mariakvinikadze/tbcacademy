import usaidImg from '../images/partners/usaid.webp'
import spaceImg from '../images/partners/space.webp'
import tnetImg from '../images/partners/tnet.webp'
import tegetaImg from '../images/partners/tegeta.webp'
import spectreImg from '../images/partners/spectre.webp'
import tbcLeasingImg from '../images/partners/tbc-leasing.webp'
import ufcImg from '../images/partners/ufc.webp'
import iosImg from '../images/courses/ios.webp'
import reactImg from '../images/courses/react.webp'
import pythonImg from '../images/courses/python.webp'
import pythonAdvancedImg from '../images/courses/python-advanced.webp'
import cyberSecurityImg from '../images/courses/cybersecurity.webp'
import totImg from '../images/courses/tot.webp'
import blockchainImg from '../images/courses/blockchain.webp'
import devopsImg from '../images/courses/devops.webp'
import informationSecurityImg from '../images/courses/information-security.webp'

export const courses = [
    {
        imageUrl: iosImg,
        title: "iOS Development",
        description: "რეგისტრაცია დასრულებულია"
    },
    {
        imageUrl: reactImg,
        title: "React",
        description: "რეგისტრაცია დასრულებულია"
    },
    {
        imageUrl: pythonImg,
        title: "Intro to Python",
        description: "რეგისტრაცია დასრულებულია"
    },
    {
        imageUrl: pythonAdvancedImg,
        title: "Advanced Python",
        description: "რეგისტრაცია დასრულებულია"
    },
    {
        imageUrl: cyberSecurityImg,
        title: "Advanced Cybersecurity Course",
        description: "რეგისტრაცია დასრულებულია"
    },
    {
        imageUrl: totImg,
        title: "ToT - Training of Trainers",
        description: "რეგისტრაცია დასრულებულია"
    },
    {
        imageUrl: blockchainImg,
        title: "Blockchain",
        description: "რეგისტრაცია დასრულებულია"
    },
    {
        imageUrl: devopsImg,
        title: "DevOps",
        description: "რეგისტრაცია დასრულებულია"
    },
    {
        imageUrl: informationSecurityImg,
        title: "Information Security Governance",
        description: "რეგისტრაცია დასრულებულია"
    },
];

export const navItems = [
    {title: 'მთავარი', href: '#'},
    {title: 'TBC IT', href: '#'},
    {title: 'TBCxUSAID', href: '#', isActive: true},
    {title: 'რისკები', href: '#'},
]

export const slideImages = [
    usaidImg,
    spaceImg,
    tnetImg,
    tegetaImg,
    spectreImg,
    tbcLeasingImg,
    ufcImg,
];

export const accordionData = [
    { header: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
       content: '<p>კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:</p><ul><li>I ეტაპი - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.</li><li>II ეტაპი - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.</li><li>III ეტაპი - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.</li><li>IV ეტაპი - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.</li></ul><p>* სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა. </p>'},
    { header: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
        content: "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე." },
    { header: "რა ღირს სწავლა პროგრამის ფარგლებში?",
        content: "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ." }
];
