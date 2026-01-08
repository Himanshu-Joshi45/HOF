import { GraduationCap, Users, BookOpen, TrendingUp } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { ImageCarousel } from '../components/ImageCarousel';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-20 pb-20 sm:pt-28 sm:pb-28">
          <div className="text-center space-y-6">
         
            <div className="max-w-4xl mx-auto">
              <ImageCarousel />
            </div>
          </div>
        </section>

        <section className="pb-32">
          <div className="bg-zinc-900 rounded-2xl p-8 sm:p-12 lg:p-16 border border-zinc-800">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              About the College
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-12 max-w-4xl">
              Poornima College of Engineering is a premier institution committed to
              academic excellence and holistic development. With state-of-the-art
              infrastructure, experienced faculty, and strong industry partnerships,
              we prepare students to become leaders and innovators in their fields.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-zinc-950 rounded-xl p-8 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Top Placements</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Consistent track record of 90%+ placements with top companies
                  like Microsoft, Amazon, and TCS visiting our campus
                </p>
              </div>

              <div className="bg-zinc-950 rounded-xl p-8 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strong Alumni Network</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Over 10,000 successful alumni working across the globe in leading
                  tech companies and startups
                </p>
              </div>

              <div className="bg-zinc-950 rounded-xl p-8 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Diverse Programs</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Wide range of engineering programs in CSE, ECE, Mechanical, Civil,
                  and more with industry-aligned curriculum
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-32">
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-2xl p-8 sm:p-12 lg:p-16 border border-amber-500/20 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Discover Our Success Stories
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Explore the achievements of our distinguished students who have made
                their mark in the industry. Get inspired by their journey from campus
                to career excellence.
              </p>
              <div className="pt-4">
                <a
                  href="/hall-of-fame"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  <span>Explore Hall of Fame</span>
                  <GraduationCap className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
