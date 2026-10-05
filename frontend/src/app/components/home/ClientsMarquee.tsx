import { useRef } from 'react'

const CLIENTS = [
  { name: 'Client 1',  logo: '/icons/1.png'  },
  { name: 'Client 2',  logo: '/icons/2.png'  },
  { name: 'Client 3',  logo: '/icons/3.png'  },
  { name: 'Client 4',  logo: '/icons/4.png'  },
  { name: 'Client 5',  logo: '/icons/5.png'  },
  { name: 'Client 6',  logo: '/icons/6.png'  },
  { name: 'Client 7',  logo: '/icons/7.png'  },
  { name: 'Client 8',  logo: '/icons/8.jpg'  },
  { name: 'Client 9',  logo: '/icons/9.jpg'  },
  { name: 'Client 10', logo: '/icons/10.jpg' },
  { name: 'Client 11', logo: '/icons/11.jpg' },
  { name: 'Client 12', logo: '/icons/12.jpg' },
  { name: 'Client 13', logo: '/icons/13.jpg' },
  { name: 'Client 14', logo: '/icons/14.jpg' },
  { name: 'Client 15', logo: '/icons/15.jpg' },
  { name: 'Client 16', logo: '/icons/16.jpg' },
  { name: 'Client 17', logo: '/icons/17.jpg' },
  { name: 'Client 18', logo: '/icons/18.jpg' },
  { name: 'Client 19', logo: '/icons/19.jpg' },
  { name: 'Client 20', logo: '/icons/20.jpg' },
  { name: 'Client 21', logo: '/icons/21.jpg' },
]

const ITEMS = [...CLIENTS, ...CLIENTS, ...CLIENTS]

export default function ClientsMarquee() {
  return (
    <section className="py-14 bg-white border-y border-gray-200 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-2">
          Trusted By
        </p>
        <h2 className="text-3xl font-black text-[#1e2a3a]">
          Our Clients & Partners
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">

        {/* Fade left */}
        <div className="absolute left-0 top-0 h-full w-24 z-10
                        bg-gradient-to-r from-white to-transparent pointer-events-none" />
        {/* Fade right */}
        <div className="absolute right-0 top-0 h-full w-24 z-10
                        bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div
          className="flex items-center animate-marquee"
          style={{ width: 'max-content' }}
        >
          {ITEMS.map((client, i) => (
            <div
              key={i}
              className="shrink-0 mx-3 flex items-center justify-center
                         bg-white border border-gray-200
                         hover:border-orange-300 hover:shadow-md
                         transition-all duration-300"
              style={{ width: '220px', height: '110px', borderRadius: '4px' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{ maxHeight: '90px', maxWidth: '200px' }}
                className="w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}