import HeroImage from "/assets/sule.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/canva.png";
import Tools10 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Canva",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Figma",
    ket: "Design App",
    dad: "1000",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Rent Ease",
    desk: "RentEase adalah website yang menyediakan kendaraan untuk disewa. Pada project ini, saya berperan sebagai Designer dan Progammer, dimana saya bekerja untuk memikirkan desain web yang menarik dan membuat fitur-fitur yang menarik.",
    tools: ["Node.JS", "Express", "React.JS", "TailwindCSS", "Vercel"],
    link : "https://rentease-fe.vercel.app",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "VKellog's",
    desk: "Vkellog's adalah website yang menampilkan produk cereal dan resep dessert yang dapat dibuat oleh user. Pada project ini saya mengerjakan semuanya sendiri, termasuk pemograman dan design.",
    tools: ["Figma", "HTML", "CSS", "JS"],
    link: "https://github.com/Tanndik/VKellog",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Makanan Nusantara",
    desk: "Ini adalah prototype untuk sebuah website yang memberikan informasi tentang makanan daerah khas Indonesia. Pada project ini saya berperan untuk mendesain dan membuat prototypenya. ",
    tools: ["Figma", "Canva"],
    link: ["https://www.figma.com/proto/sFssaO6TXaCnnW4zw3TLUI/HCI-Makanan-Nusantara?node-id=138-80&starting-point-node-id=1%3A2&t=SO6JINDJHtKhl8Fi-1"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "SKS",
    desk: "SKS ada short movie yang menceritakan tentang kehidupan seorang mahasiswa. Pada project kali ini, saya berperan sebagai pembuat naskah, editor, pembuat poster dan cameraman.",
    tools: ["Canva", "Premiere Pro"],
    link: "https://www.youtube.com/watch?v=-Ldjx7dmnf8",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Quick Cart",
    desk: "Quick Cart adalah prototype tentang aplikasi mobile yang menjual game. Dalam project ini, saya berperan sebagai pembuat ide dan membuat design yang menarik serta memikirkan fitur-fitur yang sesuai dengan aplikasi",
    tools: ["Canva", "Axure"],
    link: "https://fzogwd.axshare.com/?g=4",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Portfolio",
    desk: "Ini adalah project saya yang berisi tentang informasi pribadi saya, yang berisi tentang data pribadi saya, dan project yang pernah saya buat.",
    tools: ["React.JS", "TailwindCSS", "JavaScript"],
    link: "https://github.com/Tanndik/Porto", 
    dad: "700",
  },
];
