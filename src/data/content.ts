import { Mail, Clock, Heart, Lock } from 'lucide-react';

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Works', href: '#works' },
  { name: 'Feature', href: '#feature' },
  { name: 'FAQ', href: '#faq' },
];

export const features = [
  {
    name: 'Intentional',
    description: 'Every postcard is written with care, created for a specific feeling and a thoughtful moment.',
    icon: Heart,
    color: 'bg-brand-yellow',
  },
  {
    name: 'Timed',
    description: 'You decide when the message should be opened. It arrives only when the time feels right.',
    icon: Clock,
    color: 'bg-brand-green',
  },
  {
    name: 'Meaningful',
    description: 'Words become more meaningful when they reach someone at the exact day they need to read.',
    icon: Mail,
    color: 'bg-brand-red',
  },
  {
    name: 'Private',
    description: 'Each postcard is sealed securely, meant only for the person it was written for.',
    icon: Lock,
    color: 'bg-brand-orange',
  },
];

export const steps = [
  {
    number: '1',
    title: 'Choose the moment',
    description: '',
    image: 'https://images.unsplash.com/photo-1506744626753-aba71415b9e0?w=800&q=80',
  },
  {
    number: '2',
    title: 'Write your message',
    description: '',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
  },
  {
    number: '3',
    title: 'Let it arrive naturally',
    description: '',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
  },
];

export const faqs = [
  {
    question: 'How do I know when my postcard is opened?',
    answer: 'Once your postcard is delivered and opened, you will receive a gentle notification confirming its arrival. The exact moment remains private between you and the recipient.'
  },
  {
    question: 'Can I schedule a postcard for a specific date?',
    answer: 'Yes, you can select any future date. Your message will be securely stored and only revealed when that moment arrives.'
  },
  {
    question: 'Are my messages secure and private?',
    answer: 'Absolutely. We use end-to-end encryption. Your messages are locked and cannot be read by anyone, including us, until the recipient unlocks them on the specified date.'
  },
  {
    question: 'What happens if I change my mind?',
    answer: 'You have the option to edit or cancel a scheduled postcard anytime before the delivery date.'
  },
];
