import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const citydata = [];

// Generate 20 AC Technicians
for (let i = 1; i <= 20; i++) {
  citydata.push({
    id: i,
    name: `AC Tech ${i}`,
    type: 'AC Technician',
    desc: 'AC repair & installation expert .............................................................................',
    image: img1,
    phone: `98765432${i.toString().padStart(2, '0')}`,
    location: i % 2 === 0 ? 'Delhi' : 'Mumbai',
    experience: Math.floor(Math.random() * 10) + 1,
    rating: (Math.random() * 2 + 3).toFixed(1),
    status: 'Service available',
  });
}

// Generate 20 Software Technicians
for (let i = 21; i <= 40; i++) {
  citydata.push({
    id: i,
    name: `Software Tech ${i - 20}`,
    type: 'Software Technician',
    desc: 'OS install & software fix specialist...................................................',
    image: img2,
    phone: `91234567${(i - 20).toString().padStart(2, '0')}`,
    location: i % 2 === 0 ? 'Bangalore' : 'Chennai',
    experience: Math.floor(Math.random() * 10) + 1,
    rating: (Math.random() * 2 + 3).toFixed(1),
    status: 'Service available',
  });
}

// Generate 20 Electricians
for (let i = 41; i <= 60; i++) {
  citydata.push({
    id: i,
    name: `Electrician ${i - 40}`,
    type: 'Electrician',
    desc: 'Wiring & circuit expert..........................................................................................',
    image: img3,
    phone: `93456127${(i - 40).toString().padStart(2, '0')}`,
    location: i % 2 === 0 ? 'Delhi' : 'Pune',
    experience: Math.floor(Math.random() * 10) + 1,
    rating: (Math.random() * 2 + 3).toFixed(1),
    status: 'Service available',
  });
}

// Generate 20 Laptop Technicians
for (let i = 61; i <= 80; i++) {
  citydata.push({
    id: i,
    name: `Laptop Tech ${i - 60}`,
    type: 'Laptop Technician',
    desc: 'Laptop repair & upgrade expert............................................................................',
    image: img4,
    phone: `98989898${(i - 60).toString().padStart(2, '0')}`,
    location: i % 2 === 0 ? 'Kolkata' : 'Hyderabad',
    experience: Math.floor(Math.random() * 10) + 1,
    rating: (Math.random() * 2 + 3).toFixed(1),
    status: 'Service available',
  });
}

export default citydata;
