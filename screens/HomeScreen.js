import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/ProgramTable';
import Footer from '../components/Footer';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <Hero />
      <About />
      <Footer />
    </ScrollView>
  );
}
