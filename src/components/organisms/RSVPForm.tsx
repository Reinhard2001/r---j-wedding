import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heading, Text, Button, Input, TextArea, Select } from '../atoms';

interface RSVPFormData {
  name: string;
  plusOne: string;
  dietaryRequirements: string;
  allergies: string;
  attendance: 'yes' | 'no' | '';
}

interface FormErrors {
  name?: string;
  attendance?: string;
}

export const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    plusOne: '',
    dietaryRequirements: '',
    allergies: '',
    attendance: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const rsvpDeadline = new Date('2025-04-15');
  const daysLeft = Math.ceil((rsvpDeadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplig';
    }

    if (!formData.attendance) {
      newErrors.attendance = 'Asseblief sê ons of jy kan kom';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          plusOne: '',
          dietaryRequirements: '',
          allergies: '',
          attendance: '',
        });
      }, 3000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (name === 'name' || name === 'attendance') {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <Heading level={2} className="mb-4">
            RSVP
          </Heading>
          <Text size="lg" color="secondary" className="mb-4">
            Asseblief bevestig jou teenwoordigheid
          </Text>
          <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-lg font-semibold mb-4">
            Tydperk: {daysLeft} dae oor (Teen 15 April 2025)
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl border border-primary-100"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
            >
              <p className="font-semibold">✓ Dankie! Jou RSVP is ontvang.</p>
              <p className="text-sm">Ons sal jou binnekort kontak.</p>
            </motion.div>
          )}

          <Input
            label="Jou Volle Naam *"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            placeholder="bv. Francois Pieterse"
            required
          />

          <Input
            label="Plus-Een (Metgesel) Naam"
            name="plusOne"
            value={formData.plusOne}
            onChange={handleInputChange}
            placeholder="Opsioneel - Naam van jou metgesel"
          />

          <Select
            label="Kan jy kom? *"
            name="attendance"
            value={formData.attendance}
            onChange={handleInputChange}
            error={errors.attendance}
            required
            options={[
              { value: '', label: 'Kies asseblief...' },
              { value: 'yes', label: 'Ja, ek sal daar wees! 🎉' },
              { value: 'no', label: 'Jammer, ek kan nie kom' },
            ]}
          />

          <Select
            label="Diëtêre Vereistes"
            name="dietaryRequirements"
            value={formData.dietaryRequirements}
            onChange={handleInputChange}
            options={[
              { value: '', label: 'Nie spesifiek' },
              { value: 'vegetarian', label: 'Vegetarié' },
              { value: 'vegan', label: 'Vegan' },
              { value: 'gluten-free', label: 'Gluten vry' },
              { value: 'halal', label: 'Halal' },
              { value: 'kosher', label: 'Kosher' },
              { value: 'other', label: 'Ander' },
            ]}
          />

          <TextArea
            label="Allergiese Eise & Spesiale Versoeke"
            name="allergies"
            value={formData.allergies}
            onChange={handleInputChange}
            placeholder="Laat ons weet van enige allergiese eise of spesiale versoeke..."
            rows={4}
          />

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button type="submit" size="lg" className="w-full">
              Stuur my RSVP
            </Button>
          </motion.div>

          <Text size="sm" color="muted" className="text-center">
            Jou gegewens sal privaat hou word en slegs vir troue-organisasie gebruik.
          </Text>
        </motion.form>
      </div>
    </section>
  );
};
