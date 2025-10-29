'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from './Button';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call with delay - Replace with actual endpoint in production
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, always succeed
      // In production, replace with actual API call:
      // const response = await fetch(process.env.NEXT_PUBLIC_FORM_API_URL || '/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      console.log('Form data submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-text mb-2"
          >
            First Name *
          </label>
          <input
            {...register('firstName')}
            type="text"
            id="firstName"
            className="input-field"
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-text mb-2"
          >
            Last Name *
          </label>
          <input
            {...register('lastName')}
            type="text"
            id="lastName"
            className="input-field"
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-text mb-2"
        >
          Email Address *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="input-field"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Company and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-text mb-2"
          >
            Company
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="input-field"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-text mb-2"
          >
            Phone Number
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="input-field"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      {/* Inquiry Type */}
      <div>
        <label
          htmlFor="inquiryType"
          className="block text-sm font-semibold text-text mb-2"
        >
          Inquiry Type *
        </label>
        <select {...register('inquiryType')} id="inquiryType" className="input-field">
          <option value="">Select an option</option>
          <option value="investment">Investment Opportunity</option>
          <option value="partnership">Partnership Inquiry</option>
          <option value="career">Career Opportunities</option>
          <option value="press">Press & Media</option>
          <option value="general">General Inquiry</option>
        </select>
        {errors.inquiryType && (
          <p className="mt-1 text-sm text-red-600">
            {errors.inquiryType.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-text mb-2"
        >
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className="input-field resize-none"
          placeholder="Tell us more about your inquiry..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded text-green-800">
          Thank you for your message! We&apos;ll get back to you within 24-48 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800">
          There was an error sending your message. Please try again or email us
          directly at contact@apexcapital.com.
        </div>
      )}
    </form>
  );
}
