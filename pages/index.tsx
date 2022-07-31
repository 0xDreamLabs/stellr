/* eslint-disable max-len */
import React from 'react';
import type { NextPage } from 'next';
import TypeAnimation from 'react-type-animation';
import Layout from '../components/Layout/Layout';
import Button from '../components/UI/Button';

const Home: NextPage = () => (
  <Layout noFooter>
    <div className="min-h-screen bg-white dark:bg-primary-dark-500">
      <section className="relative">

        {/* Illustration behind hero content */}

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <TypeAnimation
                cursor={false}
                sequence={['Welcome To']}
                wrapper="h2"
                repeat={1}
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-black dark:text-white"
              />
              <TypeAnimation
                sequence={[1000, 'Stellr']}
                wrapper="span"
                repeat={1}
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
              />
              <div className="pt-8 max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 mb-8 dark:text-gray-300" data-aos="zoom-y-out" data-aos-delay="150">Stellr is a Web 3.0 social media application being built on top of Lens Protocol and Polygon. Join our Discord to learn more.</p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                  <div>
                    <Button text="Join Discord" ariaLabel="Click to join Stellr discord" color="primary" type="button" href="https://discord.gg/d272FRg2Xm" target="_blank" className="py-2 px-6 hover:animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  </Layout>
);

export default Home;
