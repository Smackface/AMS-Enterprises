import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';

export default function Team() {
  const leadership = [
    {
      name: 'Ethan Carter',
      position: 'CEO',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-3365l5eSpdjN97Pzlif3XtmhNUVlq9YHVYNVjacLdBbhYSvFgduhnVRF3tadmEhS-3eCClllAf4uYn0HPtXoav9ues0I7D-xwWulsubNjvQYb4nqlKnFL--1BSe-xBbwdn5_8yM1mQbihFTpcY6EUAaxngRBu54UugYb0UFAxERmCG7NPmfb_vfKMgHuqXaD1IUVvT4UQACrnVLvZ-hWBq4lnQnySEijC1e_roc9r0z_JbQko6hJlsY7F5xJ5rwLy2oHgZ8gJoyS'
    },
    {
      name: 'Sophia Bennett',
      position: 'CTO',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe78Z7YF-g4hLXFF6von7KdR4BIb0Ev2WmWmiHfwmsX3ykeETTlPW0CxsI5GXiurVpwCNSNeWn_yiBdxBQE-YN5faicUax5-bsA2PWl-K3bUekuDG_-_UfQwlVt8zfE5AQAlO8HL2gtmZdtw-d_NCwhadDtYRnBTTdKIt_5GXQw8fIIzZLldGIHTW4qZ3_EQC8x-Avv8SO4e0OY-dHXeWIuBY4Et96Kp22j6786FbDWcunrkNgtRToYcZzS7r-PI_ubzDodmzyN7bG'
    },
    {
      name: 'Liam Harper',
      position: 'Head of Operations',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM8AiglEbrjmrldQJgBSQdTR-qcwITnrWVNbzm74blPjShPRHeYFKMrPN15aK1Yvbd3VeA7b8LVWj1xakRqcS0LYgPanuDUbFZdRuAX0dAHneod_khtveIENNND-6QGaOAziMsybR6zX9FMGQqan39ldH_fKL_Qj9qIkRCy56mlTfHyAstZDeTsHVLA7TFjjuS7TksN-NAZU8YRnLCZtb5R3Eme97VPxxVWrygcY-4UWYrGdNThbHszSFy9kvD-rsQ91v34j-_oELo'
    }
  ];

  const engineering = [
    {
      name: 'Ava Thompson',
      position: 'Senior Software Engineer',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeA6_Lk3dHAnbJL3oYo1dQJ4Al3z-v4R7bouUjzN33JCrTJWNQCZflAns3RYFgYlLLFQPvVldpsM4IMLAdLjgzOMHx4Z3iQ4dpOzjHhZPfQp5ensR7pTl6XGFKpXrpUM4W0zEtqPCyqU7lxYPkOUyjqEAxzXiNJv5sQ7Boce8G-TNt03z7rktl8uy8KK4USCMGt_-qx2zyqffYBIDGEqaoAVyeowZBY7J3R4hsGUyRDmaxmPJm9e534ufOxNN9B3bF-TwpKV0dQMqC'
    },
    {
      name: 'Noah Foster',
      position: 'Lead AI Engineer',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgB71_VtAuMleCwX-Dzp1ffcXGTRojMuq0n4sChe1LY90coX4tASPxIonXQave5XpegOGpY4fxnfewIBmaTu-TzuhYPucmdESrmnsR2o9EDSiUbnIiAC--TxNfnesiqTGK-nx2iX8Bba2YffD_HQsKnsPaYh5hOoX8tKAo_cSAwVIZOHMT7Cda9PgL_fZvPJDkwcQujrND_RzA6G3fSns9Ba-Pedw1OBQt8ckq8bW52jVK1ZlOlkVjenLLKlbNbXADFdaKGWzI476Y'
    },
    {
      name: 'Isabella Hayes',
      position: 'Frontend Developer',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArcSC0KVno1cPeKWMOIYCqPhUtTi218TTGwMUwIMmJn861WkmP639pOYm7--2hJmLX3J80rPVA-Vpa1Nei-9WCNchsnQNmsuD0FFdl802SOyczWQ4eXiCAKqKX_62J4y2RQdvXds1yaQPsHYRQr6cp7QzOYP0nV3DhqxHM6uGwWhj480orerf1Wp8aghLyTTboVx3tD93UZfHhhoAOGoBfNbV9uLYZ4riwjRnu8OBimG6zGfzEcSTT3XdLhLsdKi8D60HRyJwbjSTr'
    },
    {
      name: 'Jackson Reed',
      position: 'Backend Developer',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZKsD1XUq-ACGq4subvsA2rn9Vr60Rk9sZMnyYY4GJ4ZRxeb2NDKNKvfI3pHUubCkfMW2Ozl7SUjC8AaeX0Rlvq5XzBMznS0q4KL5IlXAfeyBBD2DB6lq9FCpFmQEuevfS-h7gC-L0j_olBE8ISvOv2ucN-eGhGHV9Ce0dD9Cb26MqoxSeMX7kn6LATUXHdtiYUJbvga_Sq-R3ryI1_nV7nJbPtm1by3LEP60H4cbZWppmN7vymlMSHqOhn0HrWcGSDyM_zle3Pzn-'
    }
  ];

  const design = [
    {
      name: 'Olivia Morgan',
      position: 'Lead Product Designer',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaYLf_3pGEayZ3cVyGhd4kPfKxrzEZC9QkDHDEHdgzgzI5EFe_CvPIqprb_D5RAiSlKR4nJ65OVr5NH_jV9zoWDVRi8qKXtQVLLPRyT954ZO2AGVxBmZbz1ATPj6ldjbS4NEeaWuZDknHMZdpUa8mHEWj_kRe-FO_Dt3czRJbBMRWK4ca5-Oya6kxkvz2-oiCa9XLKmaqvCNGmEqpvcFlOKEx-tsDmjnkv9cD0Iuxm9KFFcdu1ZhIuGuB8MOzpq7VSCgcXA9ZZYdry'
    },
    {
      name: 'Lucas Coleman',
      position: 'UX/UI Designer',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwIeeipweZj_g7OTmXg3QPUlga_Vb-_DA0eZbvVyYFWPgJkKGnaTEsRY00PahuvbtLVxCxzMZ0LRbtR7keqxE6nqL5JPPO91Gl7OyMiCzyNvPxR2id7JOuj1uUmZYEzRxeS7gWUC3MEEHMmZYuA9oskgVepOsbXiZeU-UazK2nz0wp9PyKmmENhHD4V2ERc6VlIM83UvJYboiTXLULEHwtTfbgipfr8suCtFmkt-xovLqirvOuIsMjumSX8WB4FmtPBrFMnnYrmW5S'
    }
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Our Team - AMS Enterprises</title>

        <style jsx>{`
          body {
            min-height: max(884px, 100dvh);
          }
        `}</style>
      </Head>

      <div 
        className="relative flex h-auto min-h-screen w-full flex-col bg-[#111a22] dark justify-between group/design-root overflow-x-hidden font-roboto-mono"
      >
        <div className="flex-grow">
          <Header />
          
          {/* Page Title */}
          <div className="pt-24 pb-8 text-center">
            <h1 className="text-white text-4xl font-bold tracking-tight">Our Team</h1>
          </div>
          
          {/* Main Content */}
          <main className="px-4 pt-8 pb-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h2 className="text-white tracking-tight text-4xl font-bold leading-tight">
                Meet the minds behind AMS Enterprises
              </h2>
              <p className="text-[#92adc9] text-lg font-normal leading-normal mt-4 max-w-md mx-auto">
                Our team of experts is dedicated to delivering innovative solutions and driving success for our clients.
              </p>
            </div>

            {/* Team Sections */}
            <TeamSection 
              title="Leadership" 
              members={leadership} 
            />
            
            <TeamSection 
              title="Engineering" 
              members={engineering} 
              className="mt-12"
            />
            
            <TeamSection 
              title="Design" 
              members={design} 
              className="mt-12"
            />
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}